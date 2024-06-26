from rest_framework import status
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from orders.models import Order, OrderItem
from .models import UserCart
from .serializers import CartSerializer


class CartViewSet(ModelViewSet):
    serializer_class = CartSerializer
    queryset = UserCart.objects.all()
    permission_classes = (IsAuthenticated,)

    @action(detail=False, methods=['get'])
    def process_order(self, request, *args, **kwargs):
        order = Order.objects.create(user=request.user)
        cart_instances = UserCart.objects.filter(user=request.user)
        for instance in cart_instances:
            OrderItem.objects.create(
                order=order,
                product=instance.product,
                amount=instance.product.price,
            )
        _clear_cart(request.user.id)
        return Response(status=status.HTTP_200_OK)
    # @action(detail=True, methods=['DELETE'])
    # def remove_from_cart(self, request, pk=None):
    #     cart_item = self.get_object()
    #     cart_item.delete()
    #     return Response({'message': 'Cart item removed'})
    # http_method_names = ['get', 'post', 'put', 'delete']
    #
    # def delete(self, request, *args, **kwargs):
    #     return self.destroy(request, *args, **kwargs)

    # @action(detail=True, methods=['DELETE'])
    # def remove(self, request, pk=None):
    #     user = self.get_object()
    #     product_id = request.data.get('product_id')
    #     cart_item = models.UserCart.objects.get(product_id=product_id, user_id=user.id)
    #     cart_item.delete()
    #     return Response({'message': 'Product removed from cart'})
    #
    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)

    # @action(detail=True, methods=['GET'])
    # def products(self, request, *args, **kwargs):
    #     products = Product.objects.filter()

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.request.user.cart.products.remove(instance.product)
    #     return Response(status=status.HTTP_204_NO_CONTENT)

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return UserCart.objects.filter(user=user)


def _clear_cart(user_id: int):
    UserCart.objects.filter(user_id=user_id).delete()

