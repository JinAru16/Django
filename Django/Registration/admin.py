from django.contrib import admin
from .models import User # 같은 경로의 models.py에서 User라는 클래스를 import한다.
# Register your models here.

class UserAdmin(admin.ModelAdmin) :
    list_display = ('username', 'password')

admin.site.register(User, UserAdmin) # stie에 등록
