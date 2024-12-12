import { IExameMapper } from "@models/interfaces/mapper/IExame";
import { IExameRepository } from "@models/interfaces/repository/IExame";
import { IPaginationService } from "@models/interfaces/service/IPagination";
import { ExameMapper } from "@models/mappers/Exame";
import { ExameRepository } from "@models/repositories/Exame";
import { ExameRequest } from "@models/types/request/exame";
import { ExameResponse } from "@models/types/response/exame";
import { Pagination } from "@models/types/response/pagination";
import { inject, injectable } from "tsyringe";
import { PaginationService } from "./Pagination";
import { PacientesService } from "./Pacientes";
import { IExameService } from "@models/interfaces/service/IExame";

@injectable()
export class ExamesService implements IExameService {
    constructor(
        @inject(ExameRepository) private exameRepository: IExameRepository,
        @inject(ExameMapper) private exameMapper: IExameMapper,
        @inject(PaginationService) private paginationService: IPaginationService,
        @inject(PacientesService) private pacienteService: PacientesService
    ) {}

    async create(exameRequest: ExameRequest): Promise<ExameResponse> {
        const pacienteId = exameRequest.pacienteId.toString();
        await this.pacienteService.entityExist(pacienteId);
        
        const exame = await this.exameRepository.create(exameRequest);
        return this.exameMapper.toResponse(exame);
    }

    async update(exameRequest: ExameRequest, id: string): Promise<ExameResponse> {
        await this.entityExist(id);

        const exame = await this.exameRepository.update(exameRequest, id);
        return this.exameMapper.toResponse(exame);
    }

    async delete(id: string): Promise<void> {
        await this.entityExist(id);
        await this.exameRepository.delete(Number(id));
    }

    async getAll(page:string, limit:string): Promise< Pagination<ExameResponse> > {
        this.paginationService.validatePageAndLimit(page, limit);

        const paginationExames = await this.exameRepository
        .getAll(Number(page), Number(limit));
        
        return {
            data: this.exameMapper.toResponseList(paginationExames.data),
            total: paginationExames.total
        }
    }

    async getById(id: string): Promise<ExameResponse> {
        await this.entityExist(id);

        const exame = await this.exameRepository.getById(Number(id));
        return this.exameMapper.toResponse(exame);
    }

    async entityExist(id: string): Promise<void> {
        const exameExists = await this.exameRepository.entityExist(Number(id));
        if (!exameExists) throw new Error("Exame não encontrado");
    }
}