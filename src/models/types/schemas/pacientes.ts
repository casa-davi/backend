import { PacienteRequest } from "../request/paciente"
import { PacienteResponse } from "../response/paciente"
import { Pagination } from "../response/pagination"
import { EnderecoResponseSchema, enderecoResponseSchema } from "./endereco"
import { ExameResponseSchema, exameResponseSchema } from "./exame"
import { ParentescoResponseSchema, parentescoResponseSchema } from "./parentesco"
import { VacinaResponseSchema, vacinaResponseSchema } from "./vacina"

type PacienteRequestSchema = Omit<
PacienteRequest, 
'nome' | 'ativo'
> & { $nome: string, $ativo: boolean }

type PacienteResponseSchema = Omit<
PacienteResponse,
'id' | 'nome' | 'ativo' | 'vacinas' | 'exames' | 'parentesco' | 'endereco' 
> & { $id: number, $nome: string, $ativo: boolean }

 type PacienteResponseViewSchema = PacienteResponseSchema & {
    $vacinas: VacinaResponseSchema[],
    $exames: ExameResponseSchema[],
    $parentesco: ParentescoResponseSchema | null,
    $endereco: EnderecoResponseSchema | null
}

const pacienteRequestSchema: PacienteRequestSchema = {
    $nome: "João da Silva",
    dataNascimento: '1990-01-01' as unknown as Date,
    cpf: "12345678900",
    rg: "123456789",
    cns: "123456789012345",
    telefone: "(11) 99999-9999",
    $ativo: true
}

const pacienteResponseSchema: PacienteResponseSchema = {
    $id: 1,
    $nome: "Fulano",
    dataNascimento: '1990-01-01' as unknown as Date,
    cpf: "12345678910",
    rg: "123456789",
    cns: "123456789",
    telefone: "123456789",
    $ativo: true
}

const pacienteResponseSchemaPage: Pagination<PacienteResponseSchema> = {
    data: [pacienteResponseSchema],
    total: 1,
}

const pacienteResponseViewSchema: PacienteResponseViewSchema = {
    $id: 1,
    $nome: "Fulano",
    dataNascimento: '1990-01-01' as unknown as Date,
    cpf: "12345678910",
    rg: "123456789",
    cns: "123456789",
    telefone: "123456789",
    $ativo: true,
    $vacinas: [vacinaResponseSchema],
    $exames:[exameResponseSchema],
    $parentesco: parentescoResponseSchema,
    $endereco: enderecoResponseSchema
}

export {
    PacienteRequestSchema,
    PacienteResponseSchema,
    PacienteResponseViewSchema,
    pacienteRequestSchema,
    pacienteResponseSchema,
    pacienteResponseSchemaPage,
    pacienteResponseViewSchema
}