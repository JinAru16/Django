from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
from .models import User

# Create your views here.
def Registration(request):
    if request.method == "GET":
        return render(request, "Registration/r.html")

    elif request.method == "POST":
        username = request.POST.get["username"]   #딕셔너리형태
        password = request.POST.get["password"]
        re_password = request.POST.get['re_password']
        res_data = {} 
        if not (username and password and re_password) :
            res_data["error"] = "모든 값을 입력해야 합니다."
        if password != re_password :
            # return HttpResponse('비밀번호가 다릅니다.')
            res_data["error"] = '비밀번호가 다릅니다.'
        else :
            user = User(username=username, password=make_password(password))
            user.save()
        return render(request, "Registration/r.html", res_data) #register를 요청받으면 register.html 로 응답.
        