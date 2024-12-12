import { Router } from "express";
import { vacinaController } from "@modules/vacinas";

const vacinaRouter = Router();

vacinaRouter.get("/", (req, res, next) => { 
    /*
        #swagger.tags = ['Vacinas']
        #swagger.description = 'Endpoint para buscar todas as vacinas'
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
            description: 'Vacinas encontradas',
            schema: {
                $ref: '#/definitions/VacinaResponseList'
            }
        }
    */
    vacinaController.getAll(req, res, next)
});

vacinaRouter.get("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Vacinas']
        #swagger.description = 'Endpoint para buscar uma vacina pelo id'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id da vacina',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Vacina',
            schema: {
                $ref: '#/definitions/VacinaResponse'
            }
        }
    */
    vacinaController.getById(req, res, next)
});

vacinaRouter.post("/", (req, res, next) => {
    /*
        #swagger.tags = ['Vacinas']
        #swagger.description = 'Endpoint para criar uma nova vacina'
        #swagger.parameters['novaVacina'] = {
            in: 'body',
            description: 'dados da vacina',
            required: true,
            schema: {
                $ref: '#/definitions/VacinaRequest'
            }
        }
        #swagger.responses[201] = {
            description: 'Vacina criada',
            schema: {
                $ref: '#/definitions/VacinaResponse'
            }
        }
    */
    vacinaController.create(req, res, next)
});

vacinaRouter.put("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Vacinas']
        #swagger.description = 'Endpoint para atualizar uma vacina'
        #swagger.parameters['vacina'] = {
            in: 'body',
            description: 'dados da vacina',
            required: true,
            schema: {
                $ref: '#/definitions/VacinaRequest'
            }
        }
        #swagger.responses[200] = {
            description: 'Vacina atualizada',
            schema: {
                $ref: '#/definitions/VacinaResponse'
            }
        }
    */
    vacinaController.update(req, res, next)
});

vacinaRouter.delete("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Vacinas']
        #swagger.description = 'Endpoint para deletar uma vacina'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id da vacina',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Vacina deletada'
        }
    */
    vacinaController.delete(req, res, next)
});

export { vacinaRouter };
