from django.conf.urls import url
from . import views

urlpatterns = [

    # match all pages to our index so React can handle routing
    url(r'^(?:.*)/?$', views.index),

    # how you might explicitly define route
    # url(r'^$', views.index, name='index'),

    # example of how to static template from django just for fun
    url(r'^test/', views.test, name='test'),
]