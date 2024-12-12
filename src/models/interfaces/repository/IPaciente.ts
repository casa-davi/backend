import { Paciente } from "@models/entities/Paciente"
import { IRepository } from "@models/interfaces/repository"
import { PacienteRequest } from "@models/types/request/paciente"

export interface IPacienteRepository extends IRepository<PacienteRequest, Paciente> {}