import { Router } from "express";
import { parentescosController } from "@modules/parentescos";

const parentescoRouter = Router();

parentescoRouter.get('/', (req, res, next) => {
    /*
        #swagger.tags = ['Parentescos']
        #swagger.description = 'Endpoint para buscar todos os parentescos'
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
            description: 'Parentescos encontrados',
            schema: {
                $ref: '#/definitions/ParentescoResponseList'
            }
        }
    */
    parentescosController.getAll(req, res, next)
});

parentescoRouter.get('/:id', (req, res, next) => {
    /*
        #swagger.tags = ['Parentescos']
        #swagger.description = 'Endpoint para buscar um parentesco pelo id'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do parentesco',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Parentesco',
            schema: {
                $ref: '#/definitions/ParentescoResponse'
            }
        }
    */
    parentescosController.getById(req, res, next)
});

parentescoRouter.post('/', (req, res, next) => {
    /*
        #swagger.tags = ['Parentescos']
        #swagger.description = 'Endpoint para criar um novo parentesco'
        #swagger.parameters['novoParentesco'] = {
            in: 'body',
            description: 'dados do parentesco',
            required: true,
            schema: {
                $ref: '#/definitions/ParentescoRequest'
            }
        }
        #swagger.responses[201] = {
            description: 'Parentesco criado',
            schema: {
                $ref: '#/definitions/ParentescoResponse'
            }
        }
    */
    parentescosController.create(req, res, next)
});

parentescoRouter.put('/:id', (req, res, next) => {
    /*
        #swagger.tags = ['Parentescos']
        #swagger.description = 'Endpoint para atualizar um parentesco'
        #swagger.parameters['parentesco'] = {
            in: 'body',
            description: 'dados do parentesco',
            required: true,
            schema: {
                $ref: '#/definitions/ParentescoRequest'
            }
        }
        #swagger.responses[200] = {
            description: 'Parentesco atualizado',
            schema: {
                $ref: '#/definitions/ParentescoResponse'
            }
        }
    */
    parentescosController.update(req, res, next)
});

parentescoRouter.delete('/:id', (req, res, next) => {
    /*
        #swagger.tags = ['Parentescos']
        #swagger.description = 'Endpoint para deletar um parentesco'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do parentesco',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Parentesco deletado'
        }
    */
    parentescosController.delete(req, res, next)
});

export { parentescoRouter };