import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"
import dotenv from 'dotenv'

dotenv.config()

export class Connection {
    static type = process.env.DATABASE_TYPE as MysqlConnectionOptions['type']
    static host = process.env.DATABASE_HOST
    static port = Number(process.env.DATABASE_PORT)
    static user = process.env.DATABASE_USER
    static password = process.env.DATABASE_PASSWORD
    static database = process.env.DATABASE_NAME
}