from .models import Text
from rest_framework import viewsets, permissions

from .serialisers import TextSerializer


class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TextSerializer
