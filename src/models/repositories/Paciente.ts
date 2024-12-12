import { Connect } from "@models/connect";
import { Paciente } from "@models/entities/Paciente";
import { IPacienteRepository } from "@models/interfaces/repository/IPaciente";
import { PacienteRequest } from "@models/types/request/paciente";
import { Pagination } from "@models/types/response/pagination";
import { injectable } from "tsyringe";

@injectable()
export class PacienteRepository implements IPacienteRepository {
    private repository = Connect.datasource.getRepository(Paciente)

    async create(paciente: PacienteRequest): Promise<Paciente> {
        return await this.repository.save(paciente)
    }

    async update(pacienteRequest: PacienteRequest, id: string): Promise<Paciente> {
        const paciente = { ...pacienteRequest, id: Number(id) }
        return await this.repository.save(paciente)
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    async getAll(page: number, limit: number): Promise< Pagination<Paciente> > {
        const [result, total] = await this.repository.findAndCount(
            {   
                skip: (page - 1) * limit, 
                take: limit 
            }
        )

        return { data: result, total }
    }

    async getById(id: number): Promise<Paciente | null> {
        return await this.repository.findOne({
            where: { id },
            relations: {
                exames: true,
                endereco: true,
                parentesco: true,
                vacinas: true
            }
        });
    }

    async entityExist(id: number): Promise<boolean> {
        return await this.repository.findOneBy({ id }) ? true : false
    }

}