# Drinks and Categories

## Instalação e Execução

### Backend

1. Navegue para a pasta do backend:

    ```bash
    cd backend
    ```

2. Copy env:

    ```bash
        cp .env.example .env
    ```


3. Execute o seguinte comando para construir e iniciar os contêineres Docker:

    ```bash
    docker-compose up --build
    ```

4. Em uma nova aba, acesse o shell do contêiner Adonis:

    ```bash
    docker exec -it adonis_app sh
    ```

5. Execute as migrações do banco de dados:

    ```bash
    node ace migration:run
    ```

6. Execute as seeds do banco de dados:

    ```bash
    node ace db:seed
    ```

### Frontend

1. Navegue para a pasta do frontend:

    ```bash
    cd ../frontend
    ```
2. Copy env:

    ```bash
        cp .env.example .env
    ```


3. Construa a imagem Docker para o frontend:

    ```bash
    docker build -t frontend .
    ```

4. Execute o contêiner Docker para o frontend:

    ```bash
    docker run -it -p 3000:3000 frontend
    ```

## Visualização

Acesse o aplicativo no seu navegador em [http://localhost:3000/](http://localhost:3000/).

## Contribuição

Se quiser contribuir para este projeto, siga as diretrizes de contribuição [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

Este projeto está licenciado sob a Licença XYZ - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## Contato

Para qualquer dúvida ou feedback, entre em contato através do [giovanepecora@gmail.com](mailto:giovanepecora@gmail.com).
