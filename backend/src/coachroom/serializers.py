from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from coachroom.models import Organisation

class OrganizationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Organisation
        fields = ('__all__')