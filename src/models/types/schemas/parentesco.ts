import { ParentescoRequest } from "../request/parentesco"
import { Pagination } from "../response/pagination"
import { ParentescoResponse } from "../response/parentesco"

type ParentescoRequestSchema = Omit<
ParentescoRequest, 'pacienteId'> & { $pacienteId: number }

type ParentescoResponseSchema = Omit<
ParentescoResponse, "id"> & { $id: number }

const parentescoRequestSchema: ParentescoRequestSchema = {
    nome: "João",
    sobrenome: "Silva",
    grauParentesco: "Pai",
    $pacienteId: 1
}

const parentescoResponseSchema: ParentescoResponseSchema = {
    $id: 1,
    nome: "Fulano",
    sobrenome: "Silva",
    grauParentesco: "Pai"
}

const parentescoResponseSchemaPage: Pagination<ParentescoResponseSchema> = {
    data: [parentescoResponseSchema],
    total: 1,
}

export {
    ParentescoRequestSchema,
    ParentescoResponseSchema, 
    parentescoRequestSchema, 
    parentescoResponseSchema, 
    parentescoResponseSchemaPage 
}