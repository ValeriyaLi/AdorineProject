from rest_framework import views
from rest_framework.routers import DefaultRouter

from products.views import ProductViewSet, CategoryViewSet
from . import views

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = router.urls
