# INTERCAMBIOS EDUCATIVOS

# DESCRIPCION:
Este proyecto comprende la arquitectura de una red de consorcios educativos. Este es parte
del trabajo de Fin de Master. Tiene como objetivo  eproveer una solución integral para el registro y validación de certificaciones acádemicas. En la propuesta  se plantea que una entidad educativa pueda emitir certificados académicos en un ambiente distribuido, sin una figura de autoridad central para validarlos. Y del lado de los verificadores proporciona una vía común de consulta y verificación de los mismos de manera fiable.

# ESTRUCTURA:
La solución tiene varios componentes, este repositorio aleja cada componente de software. A continuación el detalle:

- Interfaz gráfica
- Backend: Contratos inteligrentes
- Grapdb: Base de datos semántica
- API REST: permitirá acceder a la información que nos proveera semanticamente el Servidor GrapQL
- Ontología: definida para los contratos inteligentes que alojaran los certificados digitales

# Comandos importantes

Backend API rest:
  - start:
    ```
    npm run dev
    ```
  - check:
    ```
    http://localhost:10012/api-docs
    ```

Interfaz gráfica:
  - yarn start
  - check:
    ```
    http://localhost:3000
    ```

Nodo de red Blockchain:
  - yarn add ganache-cli

  - deploy contratos en los nodos:
    truffle compile && truffle migrate
    ```
    http://localhost:8545
    ```

Deploy GraphDB:
   docker-compose up -d graphdb

  Referencia:
    ```
    http://localhost:7200
    ```
    ```
    <https://github.com/dhlab-basel/docker-graphdb-free>
    ```

# Acerca de Nosotros:

Este trabajo ha sido realizado por los autores:
 [María Pineda](https://www.linkedin.com/in/maria-pineda-7046424b/)
 [Nelson Piedra](http://investigacion.utpl.edu.ec/nopiedra)

Este repositorio forma parte del trabajo de fin de Master en la Universidad Tecnica Particular de Loja.