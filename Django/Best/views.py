from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<h2> best 상품을 판매하는 페이지 입니다.</h2>")

def test(request):
    value = RequestContext(request, {'user':request.user})
    template = get_template('test.html')
    output = template.render(value)
    return HttpResponse(output)

def test2(request):
    name = request.GET['name']
    age = request.GET['age']
    value = RequestContext(request, {'name':name, 'age':age})
    template = get_template('test2.html')
    output = template.render(value)
    return HttpResponse(output)


