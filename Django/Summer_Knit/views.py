from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h2> 여름 니트를 판매하는 페이지 입니다.</h2>")
