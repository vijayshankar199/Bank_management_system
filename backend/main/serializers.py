from rest_framework import serializers
from .models import BankUser, BankTransaction, BankAdmin


class BankUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankUser
        fields = "__all__"


class BankAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankAdmin
        fields = "__all__"


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankTransaction
        fields = "__all__"

