from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from rest_framework import viewsets
from models import Product
from serializers import ProductSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from forms import RegistrationForm
from permissions import BelongsToUser
import json


def home(request):
    """
    Send requests to / to the ember.js clientside app  """

    return render(request, 'index.html')


class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Products to be Created/edited/retrieved and destroyed.
    """
    #print  self.request.user
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    #authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticatedOrReadOnly,)# comment to view products without login
    
    def get_queryset(self):
    	if self.request.user.is_authenticated():

             return Product.objects.filter(user=self.request.user)
        else:
              return Product.objects.all()

    def perform_create(self, serializer):
         
         if self.request.user.is_authenticated():

             serializer.save()
         else: 
             serializer.save()




@require_http_methods(["POST"])
@csrf_exempt 
def register(request):
    """
    API endpoint to register a new user.
    """
    try:
        payload = json.loads(request.body)
    except ValueError:
        return JsonResponse({"error": "Unable to parse request body"}, status=400)

    form = RegistrationForm(payload)

    if form.is_valid():
        user = User.objects.create_user(form.cleaned_data["username"],
                                        form.cleaned_data["email"],
                                        form.cleaned_data["password"])
        user.save()

        return JsonResponse({"success": "User registered."}, status=201)

    return HttpResponse(form.errors.as_json(), status=400, content_type="application/json")