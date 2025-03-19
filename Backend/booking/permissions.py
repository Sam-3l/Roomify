from rest_framework import permissions

class IsAdminOrFaculty(permissions.BasePermission):
    """
    Allow only users in 'Admins' or 'Faculty' groups or superusers to create or modify reservations.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return request.user and request.user.is_authenticated
        return (request.user and request.user.is_authenticated and 
                (request.user.is_superuser or request.user.groups.filter(name__in=['Admins', 'Faculty']).exists()))

class IsOwnerOrAdmin(permissions.BasePermission):
    """
    Allow only the reservation owner or a superuser to update or delete the reservation.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.reserved_by == request.user or request.user.is_superuser
