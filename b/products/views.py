from itertools import product

from django.shortcuts import render
from rest_framework import generics, request
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from . import serializers, models, permissions
from .serializers import CategorySerializer


class ProductViewSet(ModelViewSet):
    serializer_class = serializers.ProductSerializer
    queryset = models.Product.objects.all()
    permission_classes = (permissions.IsAdminOrReadOnly, )


class CategoryViewSet(ModelViewSet):
    serializer_class = serializers.CategorySerializer
    queryset = models.Category.objects.all()
    permission_classes = (permissions.IsAdminOrReadOnly, )

    @action(detail=True, methods=['GET'])
    def products(self, request, *args, **kwargs):
        category = self.get_object()
        products = category.product_set.all()
        # serializer = serializers.ProductSerializer(products, context={'request': request})
        serializer = serializers.ProductSerializer(products, context={'request': request}, many=True)
        return Response(serializer.data)
