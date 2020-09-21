# INTERCAMBIOS EDUCATIVOS


Este proyecto comprende la arquitectura de una red de blockchain

- Interfaz gráfica
- Backend: Contratos inteligrentes
- Ontología definida para los contratos inteligentes especificados
- Grapdb
- API REST: permitirá acceder a la información que nos proveera semanticamente el Servidor GrapQL

Backend:
  - deploy:
    truffle compile && truffle migrate
  - start:
    yarn start

Deploy process:
   docker-compose up

GRAPHDB:

    ```
    docker build --build-arg edition=free --build-arg version=9.1.1 -t ontotext/graphdb:9.1.1-free free-edition
    ```

    Referencia: <https://github.com/dhlab-basel/docker-graphdb-free>

