from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h2> 장바구니에 담긴 상품들을 나타내는 페이지 </h2>")