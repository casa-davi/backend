import { ParentescoResponse } from "@models/types/response/parentesco";
import { IMapper } from ".";
import { Parentesco } from "@models/entities/Parentesco";

export interface IParentescoMapper extends IMapper<Parentesco, ParentescoResponse> {}