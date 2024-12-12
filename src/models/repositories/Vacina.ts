import { Connect } from "@models/connect";
import { Vacina } from "@models/entities/Vacina";
import { IVacinaRepository } from "@models/interfaces/repository/IVacina";
import { VacinaRequest } from "@models/types/request/vacina";
import { Pagination } from "@models/types/response/pagination";
import { injectable } from "tsyringe";

@injectable()
export class VacinaRepository implements IVacinaRepository {
    private repository = Connect.datasource.getRepository(Vacina)

    async create(vacinaRequest: VacinaRequest): Promise<Vacina> {
        const vacina = this.createVacina(vacinaRequest)
        return await this.repository.save(vacina)
    }

    async update(vacinaRequest: VacinaRequest, id: string): Promise<Vacina> {
        const vacina = { ...vacinaRequest, id: Number(id) }
        return await this.repository.save(vacina)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    async getAll(page: number, limit: number): Promise< Pagination<Vacina> > {
        const [result, total] = await this.repository.findAndCount(
            {   
                skip: (page - 1) * limit, 
                take: limit 
            }
        )

        return { data: result, total }
    }

    async getById(id: number): Promise<Vacina | null> {
        return await this.repository.findOneBy({ id })
    }

    async entityExist(id: number): Promise<boolean> {
        return !!await this.getById(id)
    }

    private createVacina(vacinaRequest: VacinaRequest): Vacina {
        return this.repository.create({
            ...vacinaRequest,
            paciente: { id: vacinaRequest.pacienteId }
        })
    }

}