

from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *
from rest_framework_simplejwt import views as jwt_views


router = DefaultRouter()

router.register(r'leaveapply',LeaveRequestViewSet)
router.register(r'promotionapply',PromotionRequestViewSet)
router.register(r'appraiseapply',AppraisalRequestViewSet)

urlpatterns = router.urls

urlpatterns = [
    
    
    path('',include(router.urls)),
    
    path('token/',
         jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('token/refresh/',
         jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    
    path('home/', HomeView.as_view(), name='home'),
    path('logout/', LogoutView.as_view(), name='logout'),    
    path('register/',reg_user),
    
     path('employees/<str:username>/', employee_detail, name='emp-detail'),

    
]
