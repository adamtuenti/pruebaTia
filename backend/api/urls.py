from django.urls import path
from .views import TokenInformacion, TokenValidacion
urlpatterns = [
    path('generarToken/', TokenInformacion.as_view(), name = 'generarToken'),
    path('validarToken/', TokenValidacion.as_view(), name = 'validarToken')
]