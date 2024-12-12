import { Endereco } from "@models/entities/Endereco";
import { IEnderecoMapper } from "@models/interfaces/mapper/IEndereco";
import { EnderecoResponse } from "@models/types/response/endereco";
import { injectable } from "tsyringe";

@injectable()
export class EnderecoMapper implements IEnderecoMapper {

    toResponse(endereco: Endereco): EnderecoResponse {
        return {
            id: endereco.id,
            estado: endereco.estado,
            cidade: endereco.cidade,
            bairro: endereco.bairro,
            rua: endereco.rua,
            numero: endereco.numero
        }
    }

    toResponseList(entities: Endereco[]): EnderecoResponse[] {
        return entities.map(this.toResponse);
    }
}