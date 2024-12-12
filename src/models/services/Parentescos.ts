import { IParentescoMapper } from "@models/interfaces/mapper/IParentesco";
import { IParentescoRepository } from "@models/interfaces/repository/IParentesco";
import { ParentescoMapper } from "@models/mappers/Parentesco";
import { ParentescoRepository } from "@models/repositories/Parentesco";
import { ParentescoRequest } from "@models/types/request/parentesco";
import { ParentescoResponse } from "@models/types/response/parentesco";
import { inject, injectable } from "tsyringe";
import { PaginationService } from "./Pagination";
import { IPaginationService } from "@models/interfaces/service/IPagination";
import { Pagination } from "@models/types/response/pagination";
import { IParentescoService } from "@models/interfaces/service/IParentesco";
import { PacientesService } from "./Pacientes";
import { IPacienteService } from "@models/interfaces/service/IPaciente";

@injectable()
export class ParentescosService implements IParentescoService {
    constructor(
        @inject(ParentescoRepository) private parentescoRepository: IParentescoRepository,
        @inject(ParentescoMapper) private parentescoMapper: IParentescoMapper,
        @inject(PaginationService) private paginationService: IPaginationService,
        @inject(PacientesService) private pacienteService: IPacienteService
    ) {}

    async create(parentescoRequest: ParentescoRequest): Promise<ParentescoResponse> {
        const pacienteId = parentescoRequest.pacienteId.toString();
        await this.pacienteService.entityExist(pacienteId);
        
        const parentesco = await this.parentescoRepository.create(parentescoRequest);
        return this.parentescoMapper.toResponse(parentesco);
    }

    async update(parentescoRequest: ParentescoRequest, parentescoId: string): 
        Promise<ParentescoResponse> {
        await this.entityExist(parentescoId);

        const parentesco = await this.parentescoRepository.update(parentescoRequest, parentescoId);
        return this.parentescoMapper.toResponse(parentesco);
    }

    async delete(parentescoId: string): Promise<void> {
        await this.entityExist(parentescoId);
        await this.parentescoRepository.delete(Number(parentescoId));
    }

    async getAll(page:string, limit:string): Promise< Pagination<ParentescoResponse> > {
        this.paginationService.validatePageAndLimit(page, limit);

        const paginationParentescos = await this.parentescoRepository
        .getAll(Number(page), Number(limit));

        return {
            data: this.parentescoMapper.toResponseList(paginationParentescos.data),
            total: paginationParentescos.total
        }
    }

    async getById(id: string): Promise<ParentescoResponse> {
        await this.entityExist(id);
        
        const parentesco = await this.parentescoRepository.getById(Number(id));
        return this.parentescoMapper.toResponse(parentesco);
    }

    async entityExist(id: string): Promise<void> {
        const parentescoExists = await this.parentescoRepository.entityExist(Number(id));
        if(!parentescoExists) throw new Error("Parentesco não encontrado");
    }
}