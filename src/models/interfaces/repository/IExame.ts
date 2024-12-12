import { Exame } from "@models/entities/Exame";
import { IRepository } from "@models/interfaces/repository";
import { exameRequest } from "@models/types/request/exame";

export interface IExameRepository extends IRepository<exameRequest, Exame> {}