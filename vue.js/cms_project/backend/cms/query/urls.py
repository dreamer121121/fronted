from django.conf.urls import url
from query import views

urlpatterns = [
    url(r'^api/get/NewsList/$',views.getNewList)
]