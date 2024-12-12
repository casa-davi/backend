import { Parentesco } from "@models/entities/Parentesco";
import { IParentescoMapper } from "@models/interfaces/mapper/IParentesco";
import { ParentescoResponse } from "@models/types/response/parentesco";
import { injectable } from "tsyringe";

@injectable()
export class ParentescoMapper implements IParentescoMapper {

    toResponse(parentesco: Parentesco): ParentescoResponse {
        return {
            id: parentesco.id,
            nome: parentesco.nome,
            sobrenome: parentesco.sobrenome,
            grauParentesco: parentesco.grauParentesco,
        };
    }

    toResponseList(entities: Parentesco[]): ParentescoResponse[] {
        return entities.map((entity) => this.toResponse(entity));
    }
}