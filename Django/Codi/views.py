from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h2> 코디된 상품을 확인하는 페이지. </h2>")
