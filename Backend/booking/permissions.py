from rest_framework import permissions

class IsAdminOrFaculty(permissions.BasePermission):
    """
    Allows only superusers or users in the 'Admins' or 'Faculty' groups to create or modify reservations.
    For safe methods, any authenticated user is allowed.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return bool(request.user and request.user.is_authenticated)
        return bool(
            request.user and
            request.user.is_authenticated and 
            (request.user.is_superuser or request.user.groups.filter(name__in=['Admins', 'Faculty']).exists())
        )

class IsOwnerOrAdmin(permissions.BasePermission):
    """
    Allows only the reservation owner or a superuser to update or delete a reservation.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.reserved_by == request.user or request.user.is_superuser

class CanCreateCourse(permissions.BasePermission):
    """
    Allows creation (or modification) of courses only by superusers,
    class reps, or lecturers.
    """
    def has_permission(self, request, view):
        # Allow safe methods (e.g. GET) for everyone.
        if request.method in permissions.SAFE_METHODS:
            return True
        # For write methods, ensure the user is authenticated.
        if not (request.user and request.user.is_authenticated):
            return False
        # Allow if the user is superuser or has a role of class_rep or lecturer.
        return request.user.is_superuser or request.user.role in ['class_rep', 'lecturer']

class CanCreateTheatre(permissions.BasePermission):
    """
    Allows creation (or modification) of theatres only by superusers.
    """
    def has_permission(self, request, view):
        # Allow safe methods (e.g. GET) for everyone.
        if request.method in permissions.SAFE_METHODS:
            return True
        # For write methods, ensure the user is authenticated and is a superuser.
        return bool(request.user and request.user.is_authenticated and request.user.is_superuser)
