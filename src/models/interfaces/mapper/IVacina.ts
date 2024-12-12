import { VacinaResponse } from "@models/types/response/vacina";
import { IMapper } from "@models/interfaces/mapper";
import { Vacina } from "@models/entities/Vacina";

export interface IVacinaMapper extends IMapper<Vacina, VacinaResponse> {}