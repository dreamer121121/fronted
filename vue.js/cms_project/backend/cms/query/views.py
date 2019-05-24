from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import pymysql
import json
# Create your views here.




def getNewList(request):
    conn = pymysql.Connect(host='localhost',user='root',password='123456',db='cms')
    cursor = conn.cursor(cursor = pymysql.cursors.DictCursor) #字典形式返回数据
    sql = 'select * from news'
    cursor.execute(sql)
    data = list(cursor.fetchall())
    print('type',type(data))
    result = {}
    result['status'] = '0'
    result['message'] = data
    return JsonResponse(result)

def getNewsdetail(request):
    id = request.GET.get('id')
    conn = pymysql.Connect(host='localhost',user='root',password='123456',db='cms')
    cursor = conn.cursor(cursor = pymysql.cursors.DictCursor) #字典形式返回数据
    sql = 'select * from news_detail where id = '+str(id)
    cursor.execute(sql)
    data = list(cursor.fetchall())
    result = {}
    result['status'] = '0'
    result['message'] = data
    return JsonResponse(result)


def getimgCategory(request):
    conn = pymysql.Connect(host='localhost',user='root',password='123456',db='cms')
    cursor = conn.cursor(cursor = pymysql.cursors.DictCursor) #字典形式返回数据
    sql = 'select * from img_category'
    cursor.execute(sql)
    data = list(cursor.fetchall())
    result = {}
    result['status'] = '0'
    result['message'] = data
    return JsonResponse(result)


