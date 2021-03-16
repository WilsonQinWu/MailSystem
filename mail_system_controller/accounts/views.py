from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm


def register_page(request):
    form = CustomUserCreationForm()

    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form': form}
    return render(request, 'accounts/register.html', context)


def login_page(request):
    form = UserCreationForm()
    context = {'form': form}
    return render(request, 'accounts/login.html', context)


def logout_user(request):
    logout(request)
    return redirect('login')
