from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt import tokens

from . import serializers, models
from products.serializers import ProductSerializer
from cart import models
from .models import UserInfo


class UserInfoViewSet(ModelViewSet):
    serializer_class = serializers.UserInfoSerializer
    queryset = UserInfo.objects.all()


class UserViewSet(ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()

    @action(detail=False, methods=['POST'])
    def token(self, request, *args, **kwargs):
        serializer = serializers.CreateTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = models.User.objects.get(username=serializer.data['username'], password=serializer.data['password'])

        access_token = tokens.AccessToken.for_user(user)

        return Response({'token': str(access_token), "is_superuser": user.is_superuser, "user_id": user.id})

    # @action(detail=False, methods=['GET'])
    # def user(self, request, *args, **kwargs):
    #     payload = tokens.AccessToken(request.data['token']).payload
    #     user_id = payload.get('user_id')
    #     is_superuser = payload.get('is_superuser')
    #
    #     user = models.User.objects.get(id=int(user_id))
    #     user_data = serializers.UserSerializer(user).data
    #     user_data['is_superuser'] = is_superuser
    #
    #     return Response(user_data)

    @action(detail=False, methods=['POST'])
    def user(self, request, *args, **kwargs):
        # token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        # payload = tokens.AccessToken(token).payload
        # # print(request.data)
        payload = tokens.AccessToken(request.data['token']).payload
        user_id = payload.get('user_id')

        user = models.User.objects.get(id=int(user_id))
        user_data = serializers.UserSerializer(user).data

        return Response(user_data)

    @action(detail=False, methods=['GET'])
    def cart_products(self, request, *args, **kwargs):
        cart_prods = models.User.objects.get(id=request.user.id).cart.all()
        prods = [c.product for c in cart_prods]
        prod_ser = ProductSerializer(prods, many=True)

        return Response(prod_ser.data)

    # @action(detail=False, methods=['DELETE'])
    # def remove(self, request, *args, **kwargs):
    #     user = self.get_object()
    #     product_id = request.data.get('product_id')
    #     cart_item = models.UserCart.objects.get(product_id=product_id, user_id=user.id)
    #     cart_item.delete()
    #     return Response({'message': 'Product removed from cart'})

    # @action(detail=True, methods=['DELETE'])
    # def remove(self, request, pk=None):
    #     serializer = serializers.CartSerializer(data=request.data)
    #     user = self.get_object()
    #     product_id = request.query_params.get('product', None)
    #     cart_item = models.UserCart.objects.get(product_id=product_id, user_id=user, )
    #     cart_item.delete()
    #     return Response({'message': 'Product removed from cart'})
