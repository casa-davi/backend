import { EnderecoMapper } from "@models/mappers/Endereco";
import { EnderecoRepository } from "@models/repositories/Endereco";
import { EnderecoRequest } from "@models/types/request/endereco";
import { EnderecoResponse } from "@models/types/response/endereco";
import { inject, injectable } from "tsyringe";
import { PaginationService } from "./Pagination";
import { IPaginationService } from "@models/interfaces/service/IPagination";
import { IEnderecoMapper } from "@models/interfaces/mapper/IEndereco";
import { IEnderecoRepository } from "@models/interfaces/repository/IEndereco";
import { Pagination } from "@models/types/response/pagination";
import { IEnderecoService } from "@models/interfaces/service/IEndereco";
import { PacientesService } from "./Pacientes";
import { IPacienteService } from "@models/interfaces/service/IPaciente";

@injectable()
export class EnderecosService implements IEnderecoService {
    constructor(
        @inject(EnderecoRepository) private enderecoRepository: IEnderecoRepository,
        @inject(EnderecoMapper) private enderecoMapper: IEnderecoMapper,
        @inject(PaginationService) private paginationService: IPaginationService,
        @inject(PacientesService) private pacienteService: IPacienteService
    ) {}

    async create(enderecoRequest: EnderecoRequest): Promise<EnderecoResponse> {
        const pacienteId = enderecoRequest.pacienteId.toString();
        await this.pacienteService.entityExist(pacienteId);

        const endereco = await this.enderecoRepository.create(enderecoRequest);
        return this.enderecoMapper.toResponse(endereco);
    }

    async update(enderecoRequest: EnderecoRequest, id: string): Promise<EnderecoResponse> {
        await this.entityExist(id);

        const endereco = await this.enderecoRepository.update(enderecoRequest, id);
        return this.enderecoMapper.toResponse(endereco);
    }

    async delete(id: string): Promise<void> {
        await this.entityExist(id);
        await this.enderecoRepository.delete(Number(id));
    }

    async getAll(page: string, limit: string): Promise< Pagination<EnderecoResponse> > {
        this.paginationService.validatePageAndLimit(page, limit);

        const paginationEndereco = await this.enderecoRepository
        .getAll(Number(page), Number(limit));

        return {
            data: this.enderecoMapper.toResponseList(paginationEndereco.data),
            total: paginationEndereco.total
        }
    }

    async getById(id: string): Promise<EnderecoResponse> {
        await this.entityExist(id);

        const endereco = await this.enderecoRepository.getById(Number(id));
        return this.enderecoMapper.toResponse(endereco);
    }

    async entityExist(id: string): Promise<void> {
        const enderecoExists = await this.enderecoRepository.entityExist(Number(id));
        if (!enderecoExists) throw new Error('Endereco não encontrado');
    }
}