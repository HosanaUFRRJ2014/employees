from rest_framework import viewsets
from rest_framework import permissions
from employees.serializers import EmployeeSerializer
from employees.models import Employee


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]