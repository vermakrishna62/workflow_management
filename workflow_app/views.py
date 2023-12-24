from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

from rest_framework.decorators import api_view
from .serializers import *

from .models import *

from rest_framework import generics

# Create your views here.

from django.shortcuts import get_object_or_404

import json

@api_view(['GET'])
def employee_detail(self,username):
    try:
        # Assuming the username is unique in the User model
        user = User.objects.get(username=username)
        obj = EmployeeDetail.objects.filter(user=user)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)

    serializer = EmployeeDetailSerializer(obj, many=True)
    return Response({'emp_data': serializer.data})

@api_view(['GET'])
def transaction_history(self,username):
    try:
        leave_transaction = LeaveRequest.objects.filter(user=username)
        promotion_transaction = PromotionRequest.objects.filter(user=username)
        appraisal_transaction = AppraisalRequest.objects.filter(user=username)
        
        transaction_data = {}
        transaction_data['leave_history'] = LeaveRequestSerializer(leave_transaction,many=True).data
        transaction_data['promotion_history'] = PromotionRequestSerializer(promotion_transaction,many=True).data
        transaction_data['appraisal_history'] = AppraisalRequestSerializer(appraisal_transaction,many=True).data
        
    except:
        return Response({'error': 'Data Loading Issue'}, status=404)
    return Response({"transaction_data":transaction_data})

class HomeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        print(request.user,type(request.user))
        
        user = User.objects.get(username=request.user)
        
        data_list = {}
        
        data_list['username'] = user.username
        data_list['email'] = user.email
        data_list['first_name'] = user.first_name
        data_list['last_name'] = user.last_name
        
        
        content = {"data": data_list}
        return Response(content)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['post',])
def reg_user(request):
    if request.method == 'POST':
        serializer = UserRegistrationSerializer(data = request.data)
        
        ret_data = {}
        
        if serializer.is_valid():
            account =  serializer.save()
            ret_data['username'] = account.username
            ret_data['password'] = account.password
            ret_data['email'] = account.email
            
            ret_data['response'] = 'Account has been created'
        
        else:
            ret_data = serializer.errors
            
        return ret_data    
            
        
        
class LeaveRequestViewSet(ModelViewSet):
    
    serializer_class = LeaveRequestSerializer
    queryset = LeaveRequest.objects.all()
    
class PromotionRequestViewSet(ModelViewSet):
    
    serializer_class = PromotionRequestSerializer
    queryset = PromotionRequest.objects.all()

class AppraisalRequestViewSet(ModelViewSet):
    
    serializer_class = AppraisalRequestSerializer
    queryset = AppraisalRequest.objects.all()