import { ParentescoRequest } from "@models/types/request/parentesco";
import { IData } from "./IData";
import { ParentescoResponse } from "@models/types/response/parentesco";

export interface IParentescoService extends IData<ParentescoRequest,ParentescoResponse> {}