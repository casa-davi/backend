import { Connect } from "@models/connect";
import { Endereco } from "@models/entities/Endereco";
import { IEnderecoRepository } from "@models/interfaces/repository/IEndereco";
import { EnderecoRequest } from "@models/types/request/endereco";
import { Pagination } from "@models/types/response/pagination";
import { injectable } from "tsyringe";

@injectable()
export class EnderecoRepository implements IEnderecoRepository {
    private repository = Connect.datasource.getRepository(Endereco);

    async create(enderecoRequest: EnderecoRequest): Promise<Endereco> {
        const endereco = this.createEndereco(enderecoRequest);
        return await this.repository.save(endereco);
    }

    async update(enderecoRequest: EnderecoRequest, id: string): Promise<Endereco> {
        const endereco = { ...enderecoRequest, id: Number(id) };
        return await this.repository.save(endereco);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async getAll(page: number, limit: number): Promise< Pagination<Endereco> > {
        const [results, total] = await this.repository.findAndCount(
            { 
                skip: (page - 1) * limit, 
                take: limit 
            }
        );
        
        return { data: results, total };
    }

    async getById(id: number): Promise<Endereco | null> {
        return await this.repository.findOneBy({ id });
    }

    async entityExist(id: number): Promise<boolean> {
        return await this.repository.findOneBy({ id }) ? true : false;
    }

    private createEndereco(enderecoRequest: EnderecoRequest) {
        return this.repository.create({
            ...enderecoRequest,
            paciente: { id: enderecoRequest.pacienteId }
        });
    }
}