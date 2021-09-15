# Desafio 

Iniciar Projeto
Para iniciar o projeto em modo de desenvolvimento execute yarn start.

Para iniciar em produção primeiro certifique-se que o docker está instalado.

Para criar a imagem abra o terminal na raiz do projeto e execute:

docker build . -t leonardo/teste-desafio02:v1

Depois execute:

docker run --name desafio02 -p 80:80 leonardo/teste-desafio02:v1

Pronto, a aplicação já está funcionando.

Acesse http://127.0.0.1:80

# Tecnologias Utilizadas:
- ReactJs
- JavaScript
- Sass
- Bootstrap
- React router dom
- React Hooks
- React Google Charts