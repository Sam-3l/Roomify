# booking/views.py

import datetime
import dateutil.parser
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Room, TimeTable, Booking
from .serializers import RoomSerializer, TimeTableSerializer, BookingSerializer

class RoomViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Viewset for viewing rooms.
    """
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.AllowAny]

class TimeTableViewSet(viewsets.ModelViewSet):
    """
    Viewset for CRUD operations on TimeTable.
    """
    serializer_class = TimeTableSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return TimeTable.objects.all().order_by('start_time')

class BookingViewSet(viewsets.ModelViewSet):
    """
    Viewset for creating, updating, and listing Bookings.
    The authenticated user is automatically assigned to the booking.
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TimeTableOccurrencesView(APIView):
    """
    Returns all valid occurrence dates for a specific TimeTable entry within a given date range.
    Each occurrence date is formatted as DD-MM-YYYY.
    
    Query Parameters:
      - start: Start date in ISO format (YYYY-MM-DD)
      - end: End date in ISO format (YYYY-MM-DD)
      
    Example URL:
      /api/timetable/1/occurrences/?start=2025-03-17&end=2025-03-24
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        try:
            timetable = TimeTable.objects.get(pk=pk)
        except TimeTable.DoesNotExist:
            return Response({"detail": "TimeTable not found."}, status=status.HTTP_404_NOT_FOUND)

        start_str = request.query_params.get('start')
        end_str = request.query_params.get('end')
        if not start_str or not end_str:
            return Response({"detail": "Please provide 'start' and 'end' query parameters."},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            start_date = dateutil.parser.parse(start_str)
            end_date = dateutil.parser.parse(end_str)
        except Exception:
            return Response({"detail": "Invalid date format. Use ISO format (YYYY-MM-DD)."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Generate occurrence datetimes between start_date and end_date using django-recurrence.
        occurrences = list(timetable.recurrence.between(start_date, end_date))
        results = []
        for occ in occurrences:
            occ_date = occ.date()
            formatted_date = occ_date.strftime("%d-%m-%Y")
            # Check for an existing booking for this timetable on the occurrence date.
            booking = Booking.objects.filter(timetable=timetable, occurrence_date=occ_date).first()
            if booking:
                result = {
                    "date": formatted_date,
                    "status": booking.status,
                    "booking_id": booking.id,
                    "booked_by": booking.user.username,
                }
            else:
                result = {
                    "date": formatted_date,
                    "status": "available",
                    "booking_id": None,
                }
            results.append(result)

        return Response({"occurrences": results}, status=status.HTTP_200_OK)
