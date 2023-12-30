from  rest_framework import routers
from .api import ProjectsViewSet

router = routers.DefaultRouter()
router.register('api/projects', ProjectsViewSet, 'projects')

urlpatterns = router.urls