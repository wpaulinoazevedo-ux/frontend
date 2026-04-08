# Minha API

Este projeto é um sistema básico de registro de serviços para a fictícia Oficina do João.

---
## Orientações
Para acessar através do Docker, acesse o diretório onde encontram-se os arquivos de frontend e execute os comandos abaixo como administrador.

Construir o container.
```
docker build -t site_frontend .
```

Iniciar o container.
```
docker run -d --name site_frontend -p 8080:80 meu-frontend
```

Para acessar o sistema digite o endereo abaixo no naveador
```
http://localhost:8080
```

## As funcionalidades

O sistema tem o objetivo de cadastrar veículos e requisições de serviços.
É possível também buscar veículos por placas e serviços por número da requisição. 

## Veículos
Para cadastrar um veículo são necessárias as informações: Nome do cliente, CPF do cliente, Telefone, Placa, Marca, Modelo, Versão, Ano e Cor do carro.

Caso a pesquisa seja feita com o campo referente a placa preenchido, as informações referentes a placa digitada serão fornecidas. Caso o campo esteja vazio, serão fornecidas informações sobre todos os veículos da base.

## Serviços
Para cadastrar um serviço são necessárias as informações: Placa e Valor.
Comentário é opcional.

Caso a pesquisa seja feita com o campo referente ao número da requisição preenchido, as informações referentes ao servio digitado serão fornecidas. Caso o campo esteja vazio, serão fornecidas informações sobre todos os serviços da base.
