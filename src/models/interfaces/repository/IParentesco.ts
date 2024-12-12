import { Parentesco } from "@models/entities/Parentesco";
import { IRepository } from "@models/interfaces/repository";
import { ParentescoRequest } from "@models/types/request/parentesco";

export interface IParentescoRepository extends IRepository<ParentescoRequest, Parentesco> {}