from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^api/get/NewsList/$',views.getNewList),
    url(r'^api/get/News/detail/$',views.getNewsdetail),
    url(r'^api/getimgcategory/$',views.getimgCategory)
]