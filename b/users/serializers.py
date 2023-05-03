from rest_framework import serializers
from . import models



class UserSerializer(serializers.ModelSerializer):
    is_superuser = serializers.BooleanField(read_only=True)

    class Meta:
        model = models.User
        fields = ('id', 'first_name', 'is_superuser', 'last_name', 'username', 'email', 'password')


class CreateTokenSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class UserInfoSerializer(serializers.Serializer):
    user = serializers.SlugRelatedField(slug_field='id', queryset=models.User.objects.all())
    country = serializers.CharField()
    city = serializers.CharField()
    street = serializers.CharField()
    house = serializers.FloatField()

    def create(self, validated_data):
        return models.UserInfo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.country = validated_data.get('country', instance.country)
        instance.city = validated_data.get('city', instance.city)
        instance.street = validated_data.get('street', instance.street)
        instance.house = validated_data.get('house', instance.house)
        instance.save()
        return instance
