from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from coachroom.models import Organisation, Lecture

class OrganizationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Organisation
        fields = ['id', 'organisation_name', 'organisation_url', 'organisation_logo','organisation_color_palette']

class LectureSerializers(serializers.ModelSerializer):

    class Meta:
        model = Lecture
        field = ('__all__')
