from .models import Project
from rest_framework import viewsets, permissions

from .serialisers import ProjectsSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProjectsSerializer
