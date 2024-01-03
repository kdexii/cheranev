from  rest_framework import routers
from .api import ProjectsViewSet

router = routers.DefaultRouter()
router.register('api/projects', ProjectsViewSet, 'projects')
router.register('api/projects/image', ProjectsViewSet, 'projectsImage')

urlpatterns = router.urls