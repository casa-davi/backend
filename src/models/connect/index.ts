import { DataSource } from "typeorm"
import { Connection } from "./Connection"
import { Endereco } from "@models/entities/Endereco"
import { Exame } from "@models/entities/Exame"
import { Paciente } from "@models/entities/Paciente"
import { Parentesco } from "@models/entities/Parentesco"
import { Vacina } from "@models/entities/Vacina"

const entities = [
    Endereco,
    Exame,
    Paciente,
    Parentesco,
    Vacina
]

export class Connect {
    static datasource: DataSource = new DataSource({
        type: Connection.type,
        host: Connection.host,
        port: Connection.port,
        username: Connection.user,
        password: Connection.password,
        database: Connection.database,
        synchronize: true,
        logging: false,
        entities: entities
    })

    static inicialize() {
        Connect.datasource.initialize().then(() => {
            console.log('Conexão com o banco de dados realizada com sucesso!')
        }
        ).catch(err => {
            console.error('Erro ao conectar com o banco de dados: ', err)
        })
    }
}