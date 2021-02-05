A simple CRUD of employees.


# Requirements:
- Python >= 3.7 
- Virtualenv >= 16.7.5
- virtualenvwrapper = 4.8.4
- Pip >= 20.2.2
- PostgresSQL = 12.5
- npm >= 12.X

# Instalation:


Create a file in the root directory with the name `.env`. This must follow the
`sample.env` template.

## Database:
- Create database with the name, user, password and port you want.
- Enter the database name, user, password and port in your `.env` file.

Commands:

        psql -U postgres

        CREATE DATABASE $YOUR_DATABASE_NAME_HERE;

## Project
- Create a virtualenv in the root directory

        mkvirtualenv -p /path/to/your/python3.7 -a $(pwd) employee

    Hint: In case you deactivate your virtualenv and you need to activate it again, use:

        workon employee

- Install libraries

        pip install -r requirements.txt


- Migrate models to the database

        python manage.py migrate

- Create superuser (login and password defined here will be used to access the API)

        python manage.py createsuperuser
       
Note: It is necessary to login with the account created for superuser to be able to access the endpoints

### Run backend locally
    python manage.py runserver

### Open in browser and log in
    localhost:8000

### Run frontend locally
    cd webapp
    npm start

### Open in browser
    localhost:3000
