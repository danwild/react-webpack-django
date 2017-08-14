# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('myapp/index.html')
    context = {
        'foo': 'bar',
    }
    return HttpResponse(template.render(context, request))

def test(request):
    template = loader.get_template('myapp/test.html')
    context = {
        'foo': 'bar',
    }
    return HttpResponse(template.render(context, request))
    # return HttpResponse("Hello, world. You're at the TEST.")