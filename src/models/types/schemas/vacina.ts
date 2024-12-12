import { VacinaRequest } from "../request/vacina"
import { Pagination } from "../response/pagination"
import { VacinaResponse } from "../response/vacina"

type VacinaRequestSchema = Omit<
VacinaRequest,
'nome' | 'dataAplicacao' | 'pacienteId'
> & { $nome: string, $dataAplicacao: Date, $pacienteId: number }

type VacinaResponseSchema = Omit<
VacinaResponse,
'id' | 'nome' | 'dataAplicacao'
> & { $id: number, $nome: string, $dataAplicacao: Date }

const vacinaRequestSchema: VacinaRequestSchema = {
    $nome: "Vacina 1",
    $dataAplicacao: '2021-01-01' as unknown as Date,
    tratamento: "Tratamento 1",
    observacao: "Observação 1",
    $pacienteId: 1
}

const vacinaResponseSchema: VacinaResponseSchema = {
    $id: 1,
    $nome: "Vacina A",
    $dataAplicacao: '2021-01-01' as unknown as Date,
    tratamento: "1 dose",
    observacao: "Observação"
}

const vacinaResponseSchemaPage: Pagination<VacinaResponseSchema> = {
    data: [vacinaResponseSchema],
    total: 1,
}

export {
    VacinaRequestSchema,
    VacinaResponseSchema, 
    vacinaRequestSchema, 
    vacinaResponseSchema, 
    vacinaResponseSchemaPage 
}