from djongo import models
from django.contrib.auth.models import User


class TeachersProfile(models.Model):
    user  = models.OneToOneField(User, related_name='profile',on_delete=models.CASCADE)
    teacher_name = models.CharField(max_length=30)
    tecaher_organisation = models.CharField(max_length=30)
    teacher_uid = models.CharField(max_length=30)
    teacher_subject = models.CharField(max_length=30)
    teacher_designation = models.CharField(max_length=30)
    #teacher_is_also_admin = models.BooleanField('True', 'False')
    #teacher_schedule

class StudentsProfile(models.Model):
    user  = models.OneToOneField(User, related_name='test',on_delete=models.CASCADE)
    student_name = models.CharField(max_length=30)
    student_uid = models.CharField(max_length=30)
    student_batch = models.CharField(max_length=30)


class Organisation(models.Model):
    organisation_name = models.CharField(max_length=30)
    organisation_url = models.CharField(max_length=30)
    organisation_logo = models.CharField(max_length=30)
    organisation_color_palette = models.CharField(max_length=30)

class Lecture(models.Model):
    lecture_slot = models.CharField(max_length=30)
    lecture_day = models.CharField(max_length=30)
    lecture_teacher = models.CharField(max_length=30)
    lecture_batch = models.CharField(max_length=30)
    lecture_date = models.DateField()
    #lecture_url = models.CharField(max_length=255)

class Slot(models.Model):
    slot_name = models.CharField(max_length=30)
    slot_start_time = models.DateField()
    slot_end_time = models.DateField()

class Batch(models.Model):
    batch_name = models.CharField(max_length=30)
    batch_uid = models.CharField(max_length=30)
    batch_teachers = models.ManyToManyField(TeachersProfile)


