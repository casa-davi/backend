import { EnderecoRequest } from "@models/types/request/endereco";
import { IData } from "./IData";
import { EnderecoResponse } from "@models/types/response/endereco";

export interface IEnderecoService extends IData<EnderecoRequest, EnderecoResponse> {}