import { Vacina } from "@models/entities/Vacina";
import { IVacinaMapper } from "@models/interfaces/mapper/IVacina";
import { VacinaResponse } from "@models/types/response/vacina";
import { injectable } from "tsyringe";

@injectable()
export class VacinaMapper implements IVacinaMapper {
    toResponse(vacina: Vacina): VacinaResponse {
        return {
            id: vacina.id,
            nome: vacina.nome,
            dataAplicacao: vacina.dataAplicacao,
            tratamento: vacina.tratamento,
            observacao: vacina.observacao
        }
    }

    toResponseList(entities: Vacina[]): VacinaResponse[] {
        return entities.map(entity => this.toResponse(entity));
    }
}