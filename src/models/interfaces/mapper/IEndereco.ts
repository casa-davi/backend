import { IMapper } from "@models/interfaces/mapper";
import { Endereco } from "@models/entities/Endereco";
import { EnderecoResponse } from "@models/types/response/endereco";

export interface IEnderecoMapper extends IMapper<Endereco, EnderecoResponse> {}