from djongo import models

# Create your models here.
class Organisation(models.Model):
    organisation_name = models.CharField(max_length=30)
    organisation_url = models.CharField(max_length=30)
    organisation_logo = models.CharField(max_length=30)
    organisation_color_palette = models.CharField(max_length=30)

class Teachers(models.Model):
    teacher_name = models.CharField(max_length=30)
    teacher_uid = models.CharField(max_length=30)
    teacher_subject = models.CharField(max_length=30)
    teacher_designation = models.CharField(max_length=30)
    #teacher_schedule

class Students(models.Model):
    student_name = models.CharField(max_length=30)
    student_uid = models.CharField(max_length=30)
    student_batch = models.CharField(max_length=30)

