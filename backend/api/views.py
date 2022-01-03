from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.views import APIView
from .models import TokenInfo
from datetime import datetime
import json
import time
import random as rn
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
# Create your views here.

class TokenInformacion(APIView):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        now = datetime.now()
        nowStr = now.strftime("%Y/%m/%d %H:%M:%S")
        dt = datetime.strptime(nowStr, '%Y/%m/%d %H:%M:%S')
        segundos = time.mktime(dt.timetuple())
        data = json.loads(request.body)
        numero = rn.randint(100000, 999999)
        TokenInfo.objects.create(cliente=data['cliente'], token=numero, date=now, segundos=segundos)
        jason = {'token': numero}
        return Response(data=jason)



class TokenValidacion(APIView):
 
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)


    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        cliente = data['cliente']
        token = data['tokenU']
        tokens = list(TokenInfo.objects.filter(cliente = cliente).order_by('-segundos').values())
        ultimo_generado = tokens[0]['token']
        if(str(token) == str(ultimo_generado)):
            return Response(data='Token Valido')
        else:
            return Response(data='Token No Valido')