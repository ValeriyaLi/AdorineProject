from django.db import models

from orders import choices
from products.models import Product
from users.models import User


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=30,
        choices=choices.OrderStatusChoices.choices,
        default=choices.OrderStatusChoices.New,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at', )


class OrderItem(models.Model):
    order = models.ForeignKey(
        to=Order,
        on_delete=models.PROTECT,
        related_name='order_items'
    )
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    amount = models.DecimalField(max_digits=14, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at', )
