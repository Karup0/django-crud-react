from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # puedes usar comillas simples o dobles
        #fields = ('id', 'tittle', 'description', 'done')
        fields = '__all__'