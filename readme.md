# server en node

server basico para test de gokachu

#### start server

   npm start

## api

### /repos

simplemente tiene un contador

### /repos/list

listado de elementos

### /repos/:name

busca repo por nombre exacto

### crear repo

    POST:/repos - body_params = title:[required]&git:[required]&version:[required]
    [optional]:author


## mock

para crear mocks es necesario correr el comando npm:

    npm run-script mock


para borrar los mocks es similiar

    npm run-script remove_mock
