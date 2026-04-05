from django.urls import path
from .import views
from .views import *

urlpatterns = [
    path("",views.test),
    path('user/',UsersAPI.as_view()),
    path('create/', CreateUserAPI.as_view()),
    path('deposit/', DepositAPI.as_view()),
    path("balance/<int:acc_no>/", BalanceAPI.as_view()),
    path("withdraw/", WithdrawAPI.as_view()),
    path('transactions/<int:acc_no>/', TransactionAPI.as_view()),
    path("admin/", AdminLoginAPI.as_view()),
]
