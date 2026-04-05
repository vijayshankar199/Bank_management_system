from django.shortcuts import render
from django.http import HttpResponse
###
from rest_framework.pagination import PageNumberPagination
from django.db import transaction
from rest_framework.views import APIView
from rest_framework.response import Response
from main.models import BankUser, BankAdmin, BankTransaction
from .serializers import BankUserSerializer, TransactionSerializer,BankAdminSerializer
# Create your views here.

def test(request):
    return HttpResponse("PLEAsE TYPE CAREFULLLY")

class UsersAPI(APIView):
    def get(self, request):
        users = BankUser.objects.all()
        obj = BankUserSerializer(users, many=True)
        return Response(obj.data)

class TransactionAPI(APIView):
    def get(self, request, acc_no):
        tx = BankTransaction.objects.filter(Account_no=acc_no)
        serializer = TransactionSerializer(tx, many=True)
        return Response(serializer.data)
    
class CreateUserAPI(APIView):
    def post(self, request):
        serializer = BankUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"User created"})
        else:
            return Response(serializer.errors)
    
class DepositAPI(APIView):
    def post(self, request):
        acc = request.data['Account_no']
        amount = float(request.data['amount'])
        user = BankUser.objects.get(Account_no=acc)
        user.amt += amount
        user.save()
        return Response({"msg":"Amount deposited","balance":user.amt})

class BalanceAPI(APIView):
    def get(self, request, acc_no):
        try:
            user = BankUser.objects.get(Account_no=acc_no)
            return Response({"balance": user.amt})
        except BankUser.DoesNotExist:
            return Response({"msg": "Account not found"}, status=404)

class WithdrawAPI(APIView):
    @transaction.atomic
    def post(self, request):
        acc_no = request.data.get("Account_no")
        amount = float(request.data.get("amount"))
        user = BankUser.objects.get(Account_no=acc_no)
        if user.amt < amount:
            return Response({"msg": "Insufficient balance"}, status=400)
        user.amt -= amount
        user.save()
        last = BankTransaction.objects.order_by('-txt_no').first()
        txt_no = 1 if not last else last.txt_no + 1
        BankTransaction.objects.create(
            txt_no=txt_no,
            Account_no=user,
            txt_type=f"Withdraw {amount}"
        )
        return Response({"msg": "Withdrawn", "balance": user.amt})

class AdminLoginAPI(APIView):
    def post(self, request):
        name = request.data.get("name")
        password = request.data.get("password")
        try:
            BankAdmin.objects.get(name=name, password=password)
            users = BankUser.objects.all()
            serializer = BankUserSerializer(users, many=True)
            return Response({
                "msg": "Admin login success",
                "users": serializer.data
            })
        except BankAdmin.DoesNotExist:
            return Response({"msg": "Invalid admin"}, status=401)