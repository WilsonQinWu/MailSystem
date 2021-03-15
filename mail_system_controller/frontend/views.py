from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect


def auth(request, *args, **kwargs):
    if request.user.is_authenticated:
        return redirect('')
    else:
        return render(request, 'frontend/index.html')


@login_required
def index(request, *args, **kwargs):
    if request.user.is_authenticated:
        return render(request, 'frontend/index.html')
    else:
        return redirect('auth/login')
