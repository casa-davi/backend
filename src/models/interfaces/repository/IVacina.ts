import { Vacina } from "@models/entities/Vacina";
import { IRepository } from "@models/interfaces/repository";
import { VacinaRequest } from "@models/types/request/vacina";

export interface IVacinaRepository extends IRepository<VacinaRequest,Vacina> {}