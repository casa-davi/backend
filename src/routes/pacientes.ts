import { Router } from "express";
import { pacienteController } from "@modules/pacientes";

const pacienteRouter = Router();

pacienteRouter.get("/", (req, res, next) => {
    /*
        #swagger.tags = ['Pacientes']
        #swagger.description = 'Endpoint para buscar todos os pacientes'
        #swagger.parameters['page'] = {
            in: 'query',
            description: 'Número da página',
            required: true,
            value: 1,
            type: 'integer'
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            description: 'Limite de registros por página',
            required: true,
            value: 10,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Pacientes encontrados',
            schema: {
                $ref: '#/definitions/PacienteResponseList'
            }
        }
    */ 
    pacienteController.getAll(req, res, next)
});

pacienteRouter.get("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Pacientes']
        #swagger.description = 'Endpoint para buscar um paciente pelo id'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do paciente',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Paciente encontrado',
            schema: {
                $ref: '#/definitions/PacienteResponseView'
            }
        }
    */
    pacienteController.getById(req, res, next)
});

pacienteRouter.post("/", (req, res, next) => {
    /*
        #swagger.tags = ['Pacientes']
        #swagger.description = 'Endpoint para criar um novo paciente'
        #swagger.parameters['novoPaciente'] = {
            in: 'body',
            description: 'dados do paciente',
            required: true,
            schema: {
                $ref: '#/definitions/PacienteRequest'
            }
        }
        #swagger.responses[201] = {
            description: 'Paciente criado',
            schema: {
                $ref: '#/definitions/PacienteResponse'
            }
        }
    */
    pacienteController.create(req, res, next)
});

pacienteRouter.put("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Pacientes']
        #swagger.description = 'Endpoint para atualizar um paciente'
        #swagger.parameters['paciente'] = {
            in: 'body',
            description: 'dados do paciente',
            required: true,
            schema: {
                $ref: '#/definitions/PacienteRequest'
            }
        }
        #swagger.responses[200] = {
            description: 'Paciente atualizado',
            schema: {
                $ref: '#/definitions/PacienteResponse'
            }
        }
    */
    pacienteController.update(req, res, next)
});

pacienteRouter.delete("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Pacientes']
        #swagger.description = 'Endpoint para deletar um paciente'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do paciente',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Paciente deletado'
        }
    */
    pacienteController.delete(req, res, next)
});

export { pacienteRouter };
