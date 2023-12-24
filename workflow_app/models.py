from django.db import models

from django.contrib.auth.models import User

class EmployeeDetail(models.Model):
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    emp_id = models.SmallIntegerField()
    dept = models.CharField(max_length=30)
    designation = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=13)
    
    def __str__(self):
        return "EMP - "+str(self.emp_id)

class LeaveRequest(models.Model):
    user = models.CharField(max_length=30,blank=False)
    start_date = models.DateField()
    end_date = models.DateField()
    reason = models.TextField()
    status = models.CharField(max_length=20, default="Pending")
    
    def __str__(self):
        return self.user+" -> "+str(self.start_date)

class PromotionRequest(models.Model):
    user = models.CharField(max_length=30,blank=False)
    current_position = models.CharField(max_length=100)
    new_position = models.CharField(max_length=100)
    status = models.CharField(max_length=20, default="Pending")
    
    def __str__(self):
        return self.user+" -> "+str(self.start_date)

class AppraisalRequest(models.Model):
    user = models.CharField(max_length=30,blank=False)
    performance_review = models.TextField()
    status = models.CharField(max_length=20, default="Pending")
    
    def __str__(self):
        return self.user+" -> "+str(self.start_date)