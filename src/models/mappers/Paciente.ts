import { Paciente } from "@models/entities/Paciente";
import { IPacienteMapper } from "@models/interfaces/mapper/IPaciente";
import { PacienteResponse } from "@models/types/response/paciente";
import { inject, injectable } from "tsyringe";
import { VacinaMapper } from "./Vacina";
import { ExameMapper } from "./Exame";
import { IVacinaMapper } from "@models/interfaces/mapper/IVacina";
import { IExameMapper } from "@models/interfaces/mapper/IExame";
import { IParentescoMapper } from "@models/interfaces/mapper/IParentesco";
import { ParentescoMapper } from "./Parentesco";
import { EnderecoMapper } from "./Endereco";
import { IEnderecoMapper } from "@models/interfaces/mapper/IEndereco";

@injectable()
export class PacienteMapper implements IPacienteMapper {

    constructor(
        @inject(VacinaMapper) private vacinaMapper: IVacinaMapper,
        @inject(ExameMapper) private exameMapper: IExameMapper,
        @inject(ParentescoMapper) private parentescoMapper: IParentescoMapper,
        @inject(EnderecoMapper) private enderecoMapper: IEnderecoMapper
    ) {}
    
    toResponse(paciente: Paciente): PacienteResponse {
        return {
            id: paciente.id,
            nome: paciente.nome,
            dataNascimento: paciente.dataNascimento,
            cpf: paciente.cpf,
            rg: paciente.rg,
            cns: paciente.cns,
            telefone: paciente.telefone,
            ativo: paciente.ativo
        }
    }

    toResponseList(pacientes: Paciente[]): PacienteResponse[] {
        return pacientes.map(paciente => this.toResponse(paciente));
    }

    toResponseView(paciente: Paciente): PacienteResponse {
        return {
            ...this.toResponse(paciente),
            vacinas: this.vacinaMapper.toResponseList(paciente.vacinas),
            exames: this.exameMapper.toResponseList(paciente.exames),
            parentesco: paciente.parentesco ? 
            this.parentescoMapper.toResponse(paciente.parentesco) : null,
            endereco: paciente.endereco ? 
            this.enderecoMapper.toResponse(paciente.endereco) : null
        }
    }

}