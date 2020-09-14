## Desafio FullStack Cyan-agro
<p align="center">
          <img src="public/assets/logo.jpeg" >
</p>

## Descrição
- Criação do servidor (__back-end__) do desafio da cyan-agro.com, descrito [aqui](https://bitbucket.org/modclima/challenge/src/master/) .

## Requisitos concluídos
- [x] Cadastrar Moinhos(Mills), Colheitas(Harvests), Fazendas(Farms) e Campos(Fields)
- [x] Consultar os dados (Todos, ou por id)
- [x] Ao inserir um novo Moinho, Colheita, Fazenda ou Campo no banco de dados, deve-se enviar um alerta a todos os usuários e mostrar os dados da respectiva nova entidade utilizando WEB SOCKETS.
- [x] Publicar o projeto na nuvem -> [link](https://agrotechchallenge.herokuapp.com)

## Tecnologias utilizadas (__Back-end__)
- NODE JS, Express JS, Sequelize JS, Postgres, Socket-io

## Executar
1. Para executar localmente no seu computador, siga os passos:

    1.1 `git clone https://github.com/kaio-giovanni/agro-tech-api/`

    1.2 `cd agro-tech-api`

    1.3 `npm i`

    1.4 `npx sequelize-cli db:create`

    1.5 `npx sequelize-cli db:migrate`

    1.6 `npm run dev`


## Autor

| ![user](https://avatars1.githubusercontent.com/u/64810260?v=4&s=150) |
| ----------------------------- |
| <p align="center"> <a href="https://github.com/kaio-giovanni"> @kaio-giovanni </a> </p>|

## Licença
- MIT
