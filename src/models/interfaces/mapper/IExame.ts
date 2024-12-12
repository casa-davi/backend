import { Exame } from "@models/entities/Exame";
import { IMapper } from ".";
import { ExameResponse } from "@models/types/response/exame";

export interface IExameMapper extends IMapper<Exame, ExameResponse> {}