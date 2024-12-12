import { Exame } from "@models/entities/Exame";
import { IExameMapper } from "@models/interfaces/mapper/IExame";
import { ExameResponse } from "@models/types/response/exame";
import { injectable } from "tsyringe";

@injectable()
export class ExameMapper implements IExameMapper {

    toResponse(exame: Exame): ExameResponse {
        return {
            id: exame.id,
            nome: exame.nome,
            tratamento: exame.tratamento,
            dataExameRealizado: exame.dataExameRealizado,
            medicacao: exame.medicacao,
            relatorio: exame.relatorio
        }
    }

    toResponseList(entities: Exame[]): ExameResponse[] {
        return entities.map(entity => this.toResponse(entity))
    }
}