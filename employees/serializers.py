from employees.models import Employee
from rest_framework import serializers


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields =  [
            'id',
            'username',
            'first_name',
            'last_name',
            'birthdate', 
            'age',
            'position'
        ]
    