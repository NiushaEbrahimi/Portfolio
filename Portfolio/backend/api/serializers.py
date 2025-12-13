from rest_framework import serializers
from .models import Technologies, MenuItem

class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technologies
        fields = ['id', 'techName', 'svg_icon', 'percent', 'category']

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['id', 'title', 'svg_icon', 'order', 'is_active']
