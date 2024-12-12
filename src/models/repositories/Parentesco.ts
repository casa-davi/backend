import { Connect } from "@models/connect"
import { Parentesco } from "@models/entities/Parentesco"
import { IParentescoRepository } from "@models/interfaces/repository/IParentesco"
import { ParentescoRequest } from "@models/types/request/parentesco"
import { Pagination } from "@models/types/response/pagination"
import { injectable } from "tsyringe"

@injectable()
export class ParentescoRepository implements IParentescoRepository {
    private repository = Connect.datasource.getRepository(Parentesco)

    async create(parentescorRequest: ParentescoRequest): Promise<Parentesco> {
        const parentesco = this.createParentesco(parentescorRequest)
        return await this.repository.save(parentesco)
    }

    async update(parentescoRequest: ParentescoRequest, id: string): Promise<Parentesco> {
        const parentesco = { ...parentescoRequest, id: Number(id) }
        return await this.repository.save(parentesco)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    async getAll(page:number, limit: number): Promise< Pagination<Parentesco> > {
        const [result, total] = await this.repository.findAndCount(
            {   
                skip: (page - 1) * limit, 
                take: limit 
            }
        )

        return { data: result, total }
    }

    async getById(id: number): Promise<Parentesco | null> {
        return await this.repository.findOneBy({ id })
    }

    async entityExist(id: number): Promise<boolean> {
        return !!await this.repository.findOneBy({ id })
    }

    private createParentesco(parentescoRequest: ParentescoRequest): Parentesco {
        return this.repository.create({
            ...parentescoRequest,
            paciente: { id: parentescoRequest.pacienteId }
        })
    }

}