from djongo import models
from django.contrib.auth.models import User
from django.utils import timezone

class TeachersProfile(models.Model):
    user  = models.OneToOneField(User, related_name='profile',on_delete=models.CASCADE, default=1)
    teacher_name = models.CharField(max_length=30)
    teacher_uid = models.CharField(max_length=30)
    teacher_subject = models.CharField(max_length=30)
    teacher_designation = models.CharField(max_length=30)
    teacher_organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE, default=1)

class StudentsProfile(models.Model):
    user  = models.OneToOneField(User, related_name='test', on_delete=models.CASCADE, default=1)
    student_name = models.CharField(max_length=30)
    student_uid = models.CharField(max_length=30)
    student_batch = models.ForeignKey('Batch', on_delete=models.CASCADE, default=1)
    student_organisation = models.ForeignKey('Organisation', on_delete=models.CASCADE, default=1)

class Organisation(models.Model):
    organisation_name = models.CharField(max_length=30)
    organisation_url = models.URLField()
    organisation_logo = models.ImageField()
    organisation_color_palette = models.CharField(max_length=30)

class Lecture(models.Model):
    lecture_slot = models.ForeignKey('Slot',on_delete=models.CASCADE, default=1)
    lecture_day = models.CharField(max_length=30)
    lecture_teacher = models.ForeignKey('TeachersProfile', on_delete=models.CASCADE)
    lecture_batch = models.ForeignKey('Batch', on_delete=models.CASCADE, default=1)
    lecture_date = models.DateField(auto_now=False, auto_now_add=False)
    lecture_url = models.URLField(default=None)
    lecture_organisation = models.ForeignKey('Organisation', on_delete=models.CASCADE,default=1)

class Slot(models.Model):
    slot_name = models.CharField(max_length=30)
    slot_start_time = models.TimeField(auto_now=False, auto_now_add=False)
    slot_end_time = models.TimeField(auto_now=False, auto_now_add=False)
    organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE,default=1)

class Batch(models.Model):
    batch_name = models.CharField(max_length=30)
    batch_uid = models.CharField(max_length=30)
    batch_teachers = models.ManyToManyField(TeachersProfile)
    organisation = models.ForeignKey('Organisation', on_delete=models.CASCADE, default=1)


class Schedule(models.Model):
    organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE,default=1)
    # batch = models.ForeignKey('Batch',on_delete=models.CASCADE)

