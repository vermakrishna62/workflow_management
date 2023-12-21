

from rest_framework import serializers
from django.contrib.auth.models import User

from .models import *

class UserRegistrationSerializer(serializers.ModelSerializer):
    
    password2 = serializers.CharField(style={'input_type':'password'},write_only=True)
    
    class Meta:
        
        model = User
        fields = ['username','email','password','password2']
        extra_kwargs = {
            'password':{'write_only':True}
        }
        
    def save(self):
        
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        
        if password != password2:
            raise serializers.ValidationError({'error':'password does not match'})
        
        if User.objects.filter(username=self.validated_data['username']).exists():
            raise serializers.ValidationError({'username': 'This username is already in use.'})
        
        if User.objects.filter(username = self.validated_data['email']).exists():
            raise serializers.ValidationError({'error':'email already exists'})
        
        account = User(username=self.validated_data['username'],email=self.validated_data['email'])
        
        account.set_password(password)
        account.save()
        
        return account
    
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']

class EmployeeDetailSerializer(serializers.ModelSerializer):
    
    user = UserSerializer()
    
    class Meta:
        model = EmployeeDetail
        fields = '__all__'
        depth = 1
        

class LeaveRequestSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = LeaveRequest
        fields = '__all__'
        
class PromotionRequestSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = PromotionRequest
        fields = '__all__'
        
class AppraisalRequestSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = AppraisalRequest
        fields = '__all__'
        