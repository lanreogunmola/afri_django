from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User



class Product(models.Model):
	
    title = models.CharField(max_length=100, unique=False)
    price = models.CharField(max_length=100, unique=False)
    size = models.CharField(max_length=100, unique=False)
    image = models.CharField(max_length=1000, unique=False)
    #user = models.ForeignKey(User)

    class JSONAPIMeta:
        resource_name = "products"
