import { ExameRequest } from "../request/exame"
import { ExameResponse } from "../response/exame"
import { Pagination } from "../response/pagination"

type ExameRequestSchema = Omit<
ExameRequest, 
"nome" | "pacienteId" | "dataExameRealizado" 
> & { 
    $pacienteId: number, $nome: string, $dataExameRealizado: Date 
}

type ExameResponseSchema = Omit<
ExameResponse,
"id" | "nome" | "dataExameRealizado" | "pacienteId"
> & {
    $id: number, $nome: string, $dataExameRealizado: Date
}

const exameRequestSchema: ExameRequestSchema = {
    $nome: "Exame de sangue",
    tratamento: "Nenhum",
    $dataExameRealizado: '2021-09-01' as unknown as Date,
    medicacao: "Nenhuma",
    relatorio: "Exame de sangue para verificar a saúde do paciente",
    $pacienteId: 1
}

const exameResponseSchema: ExameResponseSchema = {
    $id: 1,
    $nome: "Exame de sangue",
    tratamento: "Jejum de 12 horas",
    $dataExameRealizado: '2021-09-01' as unknown as Date,
    medicacao: "Nenhuma",
    relatorio: "Exame realizado com sucesso"
}

const exameResponseSchemaPage: Pagination<ExameResponseSchema> = {
    data: [exameResponseSchema],
    total: 1,
}

export {
    ExameRequestSchema,
    ExameResponseSchema, 
    exameRequestSchema, 
    exameResponseSchema, 
    exameResponseSchemaPage 
}