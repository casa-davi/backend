import { VacinaRequest } from "@models/types/request/vacina";
import { IData } from "./IData";
import { VacinaResponse } from "@models/types/response/vacina";

export interface IVacinaService extends IData<VacinaRequest,VacinaResponse> {}