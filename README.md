# Django CRUD React

![Django CRUD React](https://img.shields.io/badge/Django-CRUD-React-blue)

## Descripción

Django CRUD React es una aplicación web que permite gestionar tareas (crear, leer, actualizar y eliminar) utilizando Django para el backend y React para el frontend. Este proyecto es ideal para aprender cómo integrar Django y React en una sola aplicación.

## Características

- Crear, leer, actualizar y eliminar tareas.
- Interfaz de usuario moderna y responsiva con React.
- API RESTful construida con Django y Django REST framework.
- Manejo de errores y notificaciones con `react-toastify`.

## Requisitos

- Python 3.x
- Node.js y npm
- Git

## Instalación

### Clonar el repositorio

SH
`git clone https://github.com/tu-usuario/django-crud-react.git
cd django-crud-react`

## Configuración del Backend (Django)
Crear y activar un entorno virtual

`python -m venv env
source env/bin/activate  # En Windows: env\Scripts\activate`

Instalar dependencias

`pip install django djangorestframework django-cors-headers`

Aplicar migraciones

`python manage.py migrate`

Crear un superusuario (opcional)

`python manage.py createsuperuser`

## Configuración del Frontend (React)
Instalar dependecnias

`cd frontend
npm install react react-dom react-scripts axios react-router-dom`

## Ejecucion 
Iniciar el servidor Django

`python manage.py runserver`

## Iniciar el servidor de desarrollo de React 
En otra terminal:

`cd frontend
npm start`

## Uso:
- Navega a http://localhost:8000 para acceder al backend de Django.
- Navega a http://localhost:5173 para acceder a la interfaz de usuario de React.
- Usa la aplicación para crear, leer, actualizar y eliminar tareas.

## Estructura del proyecto:

![image](https://github.com/user-attachments/assets/271a93f3-a708-4b53-afbe-7e7cbb61d241)


##   Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

- Haz un fork del repositorio.
- Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
- Realiza tus cambios y haz commit (git commit -am 'Añadir nueva característica').
- Sube tus cambios a tu fork (git push origin feature/nueva-caracteristica).
- Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
