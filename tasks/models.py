from django.db import models

# Create your models here.

class Task(models.Model):
    #class Task es una clase que hereda de models.Model
    #models.Model es una clase que viene de django.db
    #models.Model es una clase que tiene todos los metodos para interactuar con la base de datos
    #Cuidado con la identacion, todo lo que este dentro de la clase Task va a ser parte de la clase Task
    #Cuidadon con la syntaxis de las palabras porque este dato "tittle" es un error de tipeo y cuando se haga la migracion va a dar error
    #Pues que no existe el campo "title" en la base de datos sino "tittle" con doble t
    tittle = models.CharField(max_length=200)
    description = models.TextField(blank = True)
    done = models.BooleanField(default=False)
    # Cuando usas def es para definir un metodo, siempre va dentro de una clase
    def __str__(self):
        return self.tittle