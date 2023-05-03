from rest_framework import serializers
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    category = serializers.SlugRelatedField(slug_field='id', queryset=Category.objects.all())

    class Meta:
        model = Product
        fields = ('id', 'title', 'category', 'description', 'price', 'logo')


class CategorySerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'title', 'logo')





