from django.urls import path
from .views import TechItemsAPI, TechListAPI, MenuItemsAPI, MenuListAPI

urlpatterns = [
    path('tech',TechListAPI.as_view(),name="tech-list"),
    path('tech/<int:pk>',TechItemsAPI.as_view(),name="tech-items-list"),
    path('menu',MenuListAPI.as_view(),name="menu-list"),
    path('menu/<int:pk>',MenuItemsAPI.as_view(),name="menu-items-list"),
]