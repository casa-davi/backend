import { IPacienteRepository } from "@models/interfaces/repository/IPaciente";
import { PacienteResponse } from "@models/types/response/paciente";
import { PacienteRepository } from "@models/repositories/Paciente";
import { inject, injectable } from "tsyringe";
import { PacienteRequest } from "@models/types/request/paciente";
import { PacienteMapper } from "@models/mappers/Paciente";
import { IPacienteMapper } from "@models/interfaces/mapper/IPaciente";
import { PaginationService } from "./Pagination";
import { IPaginationService } from "@models/interfaces/service/IPagination";
import { Pagination } from "@models/types/response/pagination";
import { IPacienteService } from "@models/interfaces/service/IPaciente";

@injectable()
export class PacientesService implements IPacienteService {
    constructor(
        @inject(PacienteRepository) private pacienteRepository: IPacienteRepository,
        @inject(PacienteMapper) private pacienteMapper: IPacienteMapper,
        @inject(PaginationService) private paginationService: IPaginationService
    ) {}

    async create(pacienteRequest: PacienteRequest): Promise<PacienteResponse> {
        const paciente = await this.pacienteRepository.create(pacienteRequest);
        return this.pacienteMapper.toResponse(paciente);
    }

    async update(pacienteRequest: PacienteRequest, pacienteId: string): 
        Promise<PacienteResponse> {
        await this.entityExist(pacienteId);

        const paciente = await this.pacienteRepository.update(pacienteRequest, pacienteId);
        return this.pacienteMapper.toResponse(paciente);
    }

    async getAll(page: string, limit: string): Promise< Pagination<PacienteResponse> > {
        this.paginationService.validatePageAndLimit(page, limit);

        const paginationPacientes = await this.pacienteRepository
        .getAll(Number(page), Number(limit));
        
        return {
            data: this.pacienteMapper.toResponseList(paginationPacientes.data),
            total: paginationPacientes.total
        }
    }

    async getById(id: string): Promise<PacienteResponse> {
        await this.entityExist(id);

        const paciente = await this.pacienteRepository.getById(Number(id));
        return this.pacienteMapper.toResponseView(paciente);
    }

    async delete(id: string): Promise<void> {
        await this.entityExist(id);
        await this.pacienteRepository.delete(Number(id));
    }

    async entityExist(id: string): Promise<void> {
        const pacientExists = await this.pacienteRepository.entityExist(Number(id));
        if (!pacientExists) throw new Error('Paciente não encontrado');
    }

}