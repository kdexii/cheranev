from  rest_framework import routers
from .api import TextViewSet

router = routers.DefaultRouter()
router.register('api/text', TextViewSet, 'text')

urlpatterns = router.urls