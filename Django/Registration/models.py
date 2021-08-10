from django.db import models


# Create your models here.

class User(models.Model): #장고에서 제공하는 models.Model을 상속받아야 함.
    username = models.CharField(max_length=50, verbose_name='사용자명')
    password = models.CharField(max_length=50, verbose_name='비밀번호')

    # 저장되는 시점의 시간을 자동으로 삽입해주는 기능
    registered_dttm = models.DateTimeField(auto_now_add=True, verbose_name='등록시간')

    def __str__(self):
        return self.username


    class Meta: #메타 클래스를 이요하여 테이블명 지정.
        db_table = "Member's Information"