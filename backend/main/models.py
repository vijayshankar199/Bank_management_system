from django.db import models
from django.utils import timezone

class BankUser(models.Model):
    name = models.CharField(max_length=40)
    Account_no = models.IntegerField(primary_key=True)
    Account_type = models.CharField(max_length=30)
    amt = models.FloatField(default=0)
    pin = models.IntegerField()
    strt_date = models.DateField(null=True, blank=True)
    txt_date = models.DateTimeField(default=timezone.now)

    


class BankAdmin(models.Model):
    name = models.CharField(max_length=30, primary_key=True)
    password = models.CharField(max_length=20)
    txt_date = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.name

class BankTransaction(models.Model):
    txt_no = models.IntegerField(primary_key=True)
    Account_no = models.ForeignKey(
        BankUser,
        on_delete=models.CASCADE,
        db_column='Account_no'
    )
    txt_type = models.CharField(max_length=30)
    txt_date = models.DateTimeField()
    txt_date = models.DateTimeField(default=timezone.now)

    

    def __str__(self):
        return str(self.txt_no)


