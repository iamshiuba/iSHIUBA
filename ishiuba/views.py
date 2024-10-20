from django.shortcuts import render
from .models import Video

# Create your views here.

def home(request):
    videos = Video.objects.all()  # Obtém todos os vídeos do banco de dados
    return render(request, 'home.html', {'videos': videos})
