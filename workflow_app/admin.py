from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(EmployeeDetail)

admin.site.register(LeaveRequest)

admin.site.register(PromotionRequest)

admin.site.register(AppraisalRequest)
