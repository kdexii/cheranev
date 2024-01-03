from rest_framework import serializers
from .models import Project, ImageProject


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ProjectsImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageProject
        fields = '__all__'
