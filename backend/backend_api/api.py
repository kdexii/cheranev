from .models import Project, ImageProject
from rest_framework import viewsets, permissions

from .serialisers import ProjectsSerializer, ProjectsImageSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProjectsSerializer


class ProjectsImageViewSet(viewsets.ModelViewSet):
    queryset = ImageProject.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProjectsImageSerializer
