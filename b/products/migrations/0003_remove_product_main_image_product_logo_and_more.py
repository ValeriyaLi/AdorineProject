# Generated by Django 4.2 on 2023-04-26 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_category_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='main_image',
        ),
        migrations.AddField(
            model_name='product',
            name='logo',
            field=models.ImageField(blank=True, null=True, upload_to='product_image'),
        ),
        migrations.DeleteModel(
            name='ProductImage',
        ),
    ]