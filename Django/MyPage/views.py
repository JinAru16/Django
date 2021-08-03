from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h2> 내 정보를 관리하는 페이지 </h2>")
