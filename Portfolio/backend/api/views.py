from rest_framework import viewsets
from .models import Technologies,MenuItem
from .serializers import MenuSerializer,TechSerializer

class TechListAPI(viewsets.generics.ListCreateAPIView):
    queryset = Technologies.objects.all()
    serializer_class = TechSerializer

class TechItemsAPI(viewsets.generics.RetrieveUpdateDestroyAPIView):
    queryset = Technologies.objects.all()
    serializer_class = TechSerializer
    lookup_field = "pk"

class MenuListAPI(viewsets.generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuSerializer

class MenuItemsAPI(viewsets.generics.RetrieveUpdateDestroyAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuSerializer
    lookup_field = "pk"