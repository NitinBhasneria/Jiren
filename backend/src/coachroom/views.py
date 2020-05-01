from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from coachroom.models import Organisation
from coachroom.serializers import OrganizationSerializer
from rest_framework.parsers import JSONParser

class OrganisationDetail(APIView):
    """
    Retrieve, update or delete a organisation instance.
    """
    def get_object(self, pk):
        try:
            return Organisation.objects.get(pk=pk)
        except Organisations.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        organisation = self.get_object(pk)
        serializer = OrganizationSerializer(organisation)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        organization = self.get_object(pk)
        serializer = OrganizationSerializer(organisation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        organisation = self.get_object(pk)
        organisation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# class ScheduleList(APIView):
#     """
#     Retrieve, update or delete a Schedule instance.
#     """
#     def get_object(self, pk):
#         try:
#             return Organisation.objects.get(pk=pk)
#         except Organisation.DoesNotExist:
#             raise Http404

#     def get(self, request, pk, format=None):
#         organisation = self.get_object(pk)
#         serializer = OrganizationSerializer(organisation)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         organization = self.get_object(pk)
#         serializer = OrganizationSerializer(organisation, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         organisation = self.get_object(pk)
#         organisation.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)