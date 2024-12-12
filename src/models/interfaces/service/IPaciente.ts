import { PacienteResponse } from "@models/types/response/paciente";
import { IData } from "./IData";
import { PacienteRequest } from "@models/types/request/paciente";

export interface IPacienteService extends IData<PacienteRequest, PacienteResponse> {}