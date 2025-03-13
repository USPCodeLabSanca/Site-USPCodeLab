Este é o repositório onde está o código do site do Codelab Sanca.

Existem dois diretórios principais (como podem ver): `frontend` e `backend`.  O `frontend` é onde está o código do site em si, feito com React. O `backend` é onde está o código do servidor, feito com Node.js.

A seguir estão as instruções para rodar o projeto.

# Frontend

O frontend do site é feito com React, utilizando o Vite como bundler.

## Como rodar o projeto

1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Como fazer deploy

O site está hosteado na Máquina Virtual do Codelab Sanca. Para ter acesso, entre em contato com algum presidente ou coordenador.

Na máquina virtual, encontrarás o projeto na raiz do usuário principal. Ao entrar no diretório, você pode realizar um `git pull` para atualizar o projeto, e em seguida rodar o comando `npm run build` para gerar a build do projeto.

Ao gerar os arquivos estáticos, você pode passar os arquivos para o diretório `/var/www/html`, onde o **Apache** está configurado para servir os arquivos estáticos.

Caso queira saber mais, pode me contatar (Shogo).

# Backend

O backend do site é feito com Node.js, utilizando o Express como servidor.

## Como rodar o projeto

As instruções estão no README do backend.

## Como fazer deploy

O backend está hosteado na Máquina Virtual também, na porta 3000.

O deploy é feito de forma diferente do frontend. Usamos o **nginx** para fazer um reverse proxy para o backend. Os arquivos de configuração do nginx estão localizados em `/etc/nginx/sites-available/`.

Ele está configurado para receber todas as requisições na porta 443 (https) e redirecionar para o backend na porta 3000, onde roda o docker container do backend.

Caso queira saber mais, pode me contatar (Shogo).
