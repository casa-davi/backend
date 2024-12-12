import { IVacinaMapper } from "@models/interfaces/mapper/IVacina";
import { IVacinaRepository } from "@models/interfaces/repository/IVacina";
import { VacinaMapper } from "@models/mappers/Vacina";
import { VacinaRepository } from "@models/repositories/Vacina";
import { VacinaRequest } from "@models/types/request/vacina";
import { VacinaResponse } from "@models/types/response/vacina";
import { inject, injectable } from "tsyringe";
import { PaginationService } from "./Pagination";
import { IPaginationService } from "@models/interfaces/service/IPagination";
import { Pagination } from "@models/types/response/pagination";
import { IVacinaService } from "@models/interfaces/service/IVacina";
import { PacientesService } from "./Pacientes";
import { IPacienteService } from "@models/interfaces/service/IPaciente";

@injectable()
export class VacinasService implements IVacinaService {
    constructor(
        @inject(VacinaRepository) private vacinaRepository: IVacinaRepository,
        @inject(VacinaMapper) private vacinaMapper: IVacinaMapper,
        @inject(PaginationService) private paginationService: IPaginationService,
        @inject(PacientesService) private pacienteService: IPacienteService
    ) {}

    async create(vacinaRequest: VacinaRequest): Promise<VacinaResponse> {
        const pacienteId = vacinaRequest.pacienteId.toString();
        await this.pacienteService.entityExist(pacienteId);

        const vacina = await this.vacinaRepository.create(vacinaRequest);
        return this.vacinaMapper.toResponse(vacina);
    }

    async update(vacinaRequest: VacinaRequest, vacinaId: string): Promise<VacinaResponse> {
        await this.entityExist(vacinaId);
        
        const vacina = await this.vacinaRepository.update(vacinaRequest, vacinaId);
        return this.vacinaMapper.toResponse(vacina);
    }

    async getAll(page:string, limit: string): Promise< Pagination<VacinaResponse> > {
        this.paginationService.validatePageAndLimit(page, limit);

        const paginationVacinas = await this.vacinaRepository
        .getAll(Number(page), Number(limit));

        return {
            data: this.vacinaMapper.toResponseList(paginationVacinas.data),
            total: paginationVacinas.total
        }
    }

    async getById(id: string): Promise<VacinaResponse> {
        await this.entityExist(id);

        const vacina = await this.vacinaRepository.getById(Number(id));
        return this.vacinaMapper.toResponse(vacina);
    }

    async delete(id: string): Promise<void> {
        await this.entityExist(id);
        await this.vacinaRepository.delete(Number(id));
    }

    async entityExist(id: string): Promise<void> {
        const vacinaExists = await this.vacinaRepository.entityExist(Number(id));
        if (!vacinaExists) throw new Error("Vacina não encontrada");
    }
    
}