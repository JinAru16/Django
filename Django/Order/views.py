from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h2> 상품 주문 내역을 확인하는 페이지. </h2>")
