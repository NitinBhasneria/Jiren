from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from coachroom.models import Organisation, Lecture

class OrganizationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Organisation
        fields = ('__all__')

class LectureSerializers(serializers.ModelSerializer):

    class Meta:
        model = Lecture
        field = ('__all__')
