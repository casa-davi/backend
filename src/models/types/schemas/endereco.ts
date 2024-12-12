import { EnderecoRequest } from "../request/endereco"
import { EnderecoResponse } from "../response/endereco"
import { Pagination } from "../response/pagination"

type EnderecoRequestSchema =  Omit<EnderecoRequest, "pacienteId"> & { $pacienteId: number }
type EnderecoResponseSchema = Omit<EnderecoResponse, "id"> & { $id: number }

const enderecoRequestSchema: EnderecoRequestSchema = {
    estado: 'SP',
    cidade: 'São Paulo',
    bairro: 'Vila Mariana',
    rua: 'Rua Domingos de Morais',
    numero: '1234',
    $pacienteId: 1
}

const enderecoResponseSchema: EnderecoResponseSchema = {
    $id: 1,
    estado: "SP",
    cidade: "São Paulo",
    bairro: "Jardim Paulista",
    rua: "Avenida Paulista",
    numero: "1000"
}

const enderecoResponseSchemaPage: Pagination<EnderecoResponseSchema> = {
    data: [enderecoResponseSchema],
    total: 1,
}

export { 
    EnderecoRequestSchema,
    EnderecoResponseSchema,
    enderecoRequestSchema, 
    enderecoResponseSchema, 
    enderecoResponseSchemaPage 
}