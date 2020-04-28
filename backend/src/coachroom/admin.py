from django.contrib import admin
from coachroom.models import Organisation, TeachersProfile, StudentsProfile, Batch, Lecture, Slot
# Register your models here.
admin.site.register(Organisation)
admin.site.register(TeachersProfile)
admin.site.register(StudentsProfile)
admin.site.register(Batch)
admin.site.register(Lecture)
admin.site.register(Slot)
