from django.db import models
from products.models import Product
from users.models import User


class UserCart(models.Model):
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE, related_name='cart')
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='cart')
