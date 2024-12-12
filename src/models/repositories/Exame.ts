import { Connect } from "@models/connect";
import { Exame } from "@models/entities/Exame";
import { IExameRepository } from "@models/interfaces/repository/IExame";
import { ExameRequest } from "@models/types/request/exame";
import { Pagination } from "@models/types/response/pagination";
import { injectable } from "tsyringe";

@injectable()
export class ExameRepository implements IExameRepository {
    private repository = Connect.datasource.getRepository(Exame)

    async create(exameRequest: ExameRequest): Promise<Exame> {
        const exame = this.createExame(exameRequest);
        return this.repository.save(exame);
    }

    async update(exameRequest: ExameRequest, id: string): Promise<Exame> {
        const exame = {...exameRequest, id: Number(id)};
        return this.repository.save(exame);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async getAll(page: number, limit: number): Promise< Pagination<Exame> > {
        const [results, total] = await this.repository.findAndCount(
            { 
                skip: (page - 1) * limit, 
                take: limit 
            }
        );
        
        return { data: results, total };
    }

    async getById(id: number): Promise<Exame | null> {
        return this.repository.findOneBy({ id });
    }

    async entityExist(id: number): Promise<boolean> {
        return !!(await this.repository.findOneBy({ id }));
    }

    private createExame(exameRequest: ExameRequest): Exame {
        return this.repository.create({
            ...exameRequest,
            paciente: { id: exameRequest.pacienteId }
        });
    }

}