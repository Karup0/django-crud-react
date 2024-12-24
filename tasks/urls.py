from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

#Versionado de api cuando puse v1
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')


urlpatterns = [
    path("api/v1/", include(router.urls)) ,
    path('docs/', include_docs_urls(title="Tasks API"))
]

#todo este codigo ya esta generando por defecto las peticiones
#path('api/v1/tasks/', views.TaskView.as_view(), name='tasks')
# GET, POST, PUT, DELETE 
# YA NO TENDREMOS QUE HACERLO MANUALMENTE