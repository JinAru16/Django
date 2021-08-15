"""Shopping URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Best/', include('Best.urls')),
    path('New/', include('New.urls')),
    path('Codi/', include('Codi.urls')),
    path('Top/', include('Top.urls')),
    path('Pants/', include('Pants.urls')),
    path('Shoes_and_Bag/', include('Shoes_and_Bag.urls')),


    path('Main/', include('Main.urls')),
    path('', include('Main.urls')),
    path('Registration/', include('Registration.urls')),
    path('Login/',include('Login.urls')),
    path('ShoppingCart/', include('ShoppingCart.urls')),
    path('Order/', include('Order.urls')),
    path('MyPage/', include('MyPage.urls')),
    path('LogOut/', include('LogOut.urls')),
    



    
]
