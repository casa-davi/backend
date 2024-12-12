import { Router } from "express";
import { exameController } from "@modules/exames";

const exameRouter = Router();

exameRouter.get('/', (req, res, next) => {
    /*
        #swagger.tags = ['Exames']
        #swagger.description = 'Endpoint para buscar todos os exames'
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
            description: 'Exames encontrados',
            schema: {
                $ref: '#/definitions/ExameResponseList'
            }
        }
    */
    exameController.getAll(req, res, next);
});

exameRouter.get('/:id', (req, res, next) => {
    /*
        #swagger.tags = ['Exames']
        #swagger.description = 'Endpoint para buscar um exame pelo id'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do exame',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Exame encontrado',
            schema: {
                $ref: '#/definitions/ExameResponse'
            }
        }
    */
    exameController.getById(req, res, next);
});

exameRouter.post('/', (req, res, next) => {
    /*
        #swagger.tags = ['Exames']
        #swagger.description = 'Endpoint para criar um novo exame'
        #swagger.parameters['novoExame'] = {
            in: 'body',
            description: 'dados do exame',
            required: true,
            schema: {
                $ref: '#/definitions/ExameRequest'
            }
        }
        #swagger.responses[201] = {
            description: 'Exame criado',
            schema: {
                $ref: '#/definitions/ExameResponse'
            }
        }
    */
    exameController.create(req, res, next);
});

exameRouter.put('/:id', (req, res, next) => {
    /*
        #swagger.tags = ['Exames']
        #swagger.description = 'Endpoint para atualizar um exame'
        #swagger.parameters['exame'] = {
            in: 'body',
            description: 'dados do exame',
            required: true,
            schema: {
                $ref: '#/definitions/ExameRequest'
            }
        }
        #swagger.responses[200] = {
            description: 'Exame atualizado',
            schema: {
                $ref: '#/definitions/ExameResponse'
            }
        }
    */
    exameController.update(req, res, next);
});

exameRouter.delete('/:id', (req, res, next) => {
    /*
        #swagger.tags = ['Exames']
        #swagger.description = 'Endpoint para deletar um exame'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do exame',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Exame deletado'
        }
    */
    exameController.delete(req, res, next);
});

export { exameRouter };
