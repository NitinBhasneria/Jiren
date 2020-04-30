from djongo import models
from django.contrib.auth.models import User

class TeachersProfile(models.Model):
    user  = models.OneToOneField(User, related_name='profile',on_delete=models.CASCADE)
    teacher_name = models.CharField(max_length=30)
    teacher_uid = models.CharField(max_length=30)
    teacher_subject = models.CharField(max_length=30)
    teacher_designation = models.CharField(max_length=30)
    teacher_organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE)

class StudentsProfile(models.Model):
    user  = models.OneToOneField(User, related_name='test',on_delete=models.CASCADE)
    student_name = models.CharField(max_length=30)
    student_uid = models.CharField(max_length=30)
    student_batch = models.CharField(max_length=30)
    student_organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE)


class Organisation(models.Model):
    organisation_name = models.CharField(max_length=30)
    organisation_url = models.URLField()
    organisation_logo = models.ImageField()
    organisation_color_palette = models.CharField(max_length=30)

class Lecture(models.Model):
    lecture_slot = models.ForeignKey('Slot',on_delete=models.CASCADE)
    lecture_day = models.CharField(max_length=30)
    lecture_teacher = models.ForeignKey('TeachersProfile', on_delete=models.CASCADE)
    lecture_batch = models.ForeignKey('Batch',on_delete=models.CASCADE)
    lecture_date = models.DateField()
    lecture_url = models.URLField()
    lecture_organisation = models.ForeignKey('Organisation', on_delete=models.CASCADE)

class Slot(models.Model):
    slot_name = models.CharField(max_length=30)
    slot_start_time = models.DateField()
    slot_end_time = models.DateField()
    organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE)

class Batch(models.Model):
    batch_name = models.CharField(max_length=30)
    batch_uid = models.CharField(max_length=30)
    batch_teachers = models.ManyToManyField(TeachersProfile)
    organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE)


class Schedule(models.Model):
    organisation = models.ForeignKey('Organisation',on_delete=models.CASCADE)
    batch = models.ForeignKey('Batch',on_delete=models.CASCADE)
    # schedule = models.ArrayField(model_container=)

