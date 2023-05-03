from rest_framework import serializers

from cart.models import UserCart
from products.models import Product
from users.models import User
from products.serializers import ProductSerializer


# class CartSerializer(serializers.ModelSerializer):
#     product = serializers.SlugRelatedField(slug_field='id', queryset=Product.objects.all())
#     user = serializers.SlugRelatedField(slug_field='id', queryset=User.objects.all())
#
#     class Meta:
#         model = UserCart
#         fields = ('product', 'user')

class CartSerializer(serializers.ModelSerializer):
    #user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    user = serializers.SlugRelatedField(slug_field='id', queryset=User.objects.all())

    class Meta:
        model = UserCart
        fields = ('id', 'product', 'user')

