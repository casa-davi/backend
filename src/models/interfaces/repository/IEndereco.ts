import { Endereco } from "@models/entities/Endereco";
import { IRepository } from "@models/interfaces/repository";
import { EnderecoRequest } from "@models/types/request/endereco";

export interface IEnderecoRepository extends IRepository<EnderecoRequest, Endereco> {}