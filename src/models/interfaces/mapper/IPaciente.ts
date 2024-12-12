import { Paciente } from "@models/entities/Paciente";
import { IMapper } from "@models/interfaces/mapper";
import { PacienteResponse } from "@models/types/response/paciente";

export interface IPacienteMapper extends IMapper<Paciente, PacienteResponse> {
    toResponseView(paciente: Paciente): PacienteResponse
}