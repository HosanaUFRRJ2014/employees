# Pré-requisitos:
- Python >= 3.7 
- Virtualenv >= 16.7.5
- virtualenvwrapper = 4.8.4
- Pip >= 20.2.2
- PostgresSQL = 12.5

# Instalação:

Crie um arquivo no diretório raiz com o nome `.env`. Este deverá seguir o 
modelo de `sample.env`.

## Base de dados:
- Criar base de dados com o nome, usuário, senha e porta que desejar.
- Informe o nome da base de dados, usuário, senha e porta no seu arquivo .env.

Comandos de exemplo:

        psql -U postgres

        CREATE DATABASE employees;

## Projeto
- No diretório raiz, criar virtualenv

        mkvirtualenv -p /path/to/your/python3.7 -a $(pwd) employee

    Dica: Caso desative o virtualenv e precise ativá-lo novamente, use:

        workon employee

- Instalar bibliotecas

        pip install -r requirements.txt


- Migrar modelos para a base de dados

        python manage.py migrate

- Criar superusuário (login e senha definidos aqui serão usados para acessar a API):

        python manage.py createsuperuser
    
    Obs: É preciso realizar o login com a conta criada para superusuário para poder acessar os endpoints.

### Executar localmente:
    python manage.py runserver


### Abrir no browser:
    localhost:8000