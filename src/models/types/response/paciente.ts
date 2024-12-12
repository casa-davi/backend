import { EnderecoResponse } from "./endereco"
import { ExameResponse } from "./exame"
import { ParentescoResponse } from "./parentesco"
import { VacinaResponse } from "./vacina"

export type PacienteResponse = {
    id: number,
    nome: string,
    dataNascimento: Date,
    cpf: string,
    rg: string,
    cns: string,
    telefone: string,
    ativo: boolean,
    vacinas?: VacinaResponse[],
    exames?: ExameResponse[],
    parentesco?: ParentescoResponse | null,
    endereco?: EnderecoResponse | null
}