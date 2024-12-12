import { ExameRequest } from "@models/types/request/exame";
import { IData } from "./IData";
import { ExameResponse } from "@models/types/response/exame";

export interface IExameService extends IData<ExameRequest,ExameResponse> {}