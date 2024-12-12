export type PacienteRequest = {
    nome: string,
    dataNascimento: Date,
    cpf: string,
    rg: string,
    cns: string,
    telefone: string,
    ativo: boolean
}