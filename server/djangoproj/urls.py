from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('djangoapp/', include('djangoapp.urls')),
    
    # Static Frontend Page Routes
    path('', TemplateView.as_view(template_name="index.html")),
    path('about/', TemplateView.as_view(template_name="index.html")),
    path('contact/', TemplateView.as_view(template_name="index.html")),
    path('login/', TemplateView.as_view(template_name="index.html")),
    path('register/', TemplateView.as_view(template_name="index.html")),
    path('dealers/', TemplateView.as_view(template_name="index.html")),
    
    # Dynamic Frontend Routes using RegEx (Handles all ID parameters)
    re_path(r'^dealer/.*$', TemplateView.as_view(template_name="index.html")),
    re_path(r'^postreview/.*$', TemplateView.as_view(template_name="index.html")),
]
