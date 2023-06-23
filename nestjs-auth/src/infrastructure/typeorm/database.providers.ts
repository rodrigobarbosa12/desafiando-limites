import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as path from 'path'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: '',
  password: '',
  database: '',
  logging: false,
  entities: [path.join(__dirname, 'entity/*.js')],
  migrations: [path.join(__dirname, 'migrations/*.js')],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy(),
})

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      console.log('DB connectes')

      const typeormInit = await dataSource.initialize()

      return typeormInit
    },
  },
]

export default dataSource
