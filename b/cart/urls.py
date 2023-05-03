from rest_framework.routers import DefaultRouter

from cart.views import CartViewSet
from django.urls import path
from . import views

router = DefaultRouter()

router.register(r'cart', CartViewSet)

urlpatterns = router.urls


# urlpatterns = [
#     # ... your other URL patterns here ...
#     path('cart/<int:user_id>/', views.CartViewSet.as_view({'get': 'list'}), name='cart-list'),
# ]