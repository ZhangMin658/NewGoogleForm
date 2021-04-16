from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # modification(2021.04)
    # url(r'^login/$', auth_views.LoginView, name='login'),
    # url(r'^logout/$', auth_views.LogoutView, name='logout'),
    url(r'^login/$', auth_views.LoginView.as_view(), name='login'),
    url(r'^logout/$', auth_views.LogoutView.as_view(), name='logout'),
    url(r'^admin/', admin.site.urls),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^$', views.index, name='index'),
    url(r'^form/(?P<form_id>[0-9]+)/$', views.formDetail, name='formDetail'),
    url(r'^createForm/$', views.createForm, name='createForm'),
    url(r'^saveForm/$', views.saveForm, name='saveForm'),
    url(r'^updateForm/(?P<form_id>[0-9]+)/$', views.updateForm, name='updateForm'),
    # url(r'^form/(?P<form_id>[0-9]+)/createDoc/$', views.createDoc, name='createDoc')
]
