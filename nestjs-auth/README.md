## Build do projeto
    yarn build

## Criar migration
    yarn typeorm migration:create src/infrastructure/typeorm/migrations/table-name

## Executar a migration
    yarn typeorm migration:run -- -d dist/infrastructure/typeorm/database.providers.js
