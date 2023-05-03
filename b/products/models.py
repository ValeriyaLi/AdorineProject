from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=70, unique=True, default='Title')
    logo = models.ImageField(upload_to='category_logos', blank=True, null=True)


class Product(models.Model):
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    description = models.TextField()
    price = models.FloatField()
    logo = models.ImageField(upload_to='product_image', blank=True, null=True)


# class ProductImage(models.Model):
#     product = models.ForeignKey(to=Product, on_delete=models.CASCADE, related_name='product_images')
#     image = models.ImageField(upload_to='product_images')
