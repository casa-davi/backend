import { Router } from "express";
import { enderecoController } from "@modules/enderecos";

const enderecoRouter = Router();

enderecoRouter.get("/", (req, res, next) => {
    /*
        #swagger.tags = ['Endereços']
        #swagger.description = 'Endpoint para buscar todos os endereços'
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
            description: 'Endereços
            response',
            schema: {
                $ref: '#/definitions/EnderecoResponseList'
            }
        }
    */
    enderecoController.getAll(req, res, next)
});

enderecoRouter.get("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Endereços']
        #swagger.description = 'Endpoint para buscar um endereço pelo id'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do endereço',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Endereço encontrado',
            schema: {
                $ref: '#/definitions/EnderecoResponse'
            }
        }
    */
    enderecoController.getById(req, res, next)
});

enderecoRouter.post("/", (req, res, next) => {
    /*
        #swagger.tags = ['Endereços']
        #swagger.description = 'Endpoint para criar um novo endereço'
        #swagger.parameters['novoEndereco'] = {
            in: 'body',
            description: 'dados do endereço',
            required: true,
            schema: {
                $ref: '#/definitions/EnderecoRequest'
            }
        }
        #swagger.responses[201] = {
            description: 'Endereço criado',
            schema: {
                $ref: '#/definitions/EnderecoResponse'
            }
        }
    */
    enderecoController.create(req, res, next)
});

enderecoRouter.put("/:id", (req, res, next) => {
    /* 
        #swagger.tags = ['Endereços']
        #swagger.description = 'Endpoint para atualizar um endereço'
        #swagger.parameters['endereco'] = {
            in: 'body',
            description: 'dados do endereço',
            required: true,
            schema: {
                $ref: '#/definitions/EnderecoRequest'
            }
        }
        #swagger.responses[200] = {
            description: 'Endereço atualizado',
            schema: {
                $ref: '#/definitions/EnderecoResponse'
            }
        }
    */
    enderecoController.update(req, res, next)
});

enderecoRouter.delete("/:id", (req, res, next) => {
    /*
        #swagger.tags = ['Endereços']
        #swagger.description = 'Endpoint para deletar um endereço'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'id do endereço',
            required: true,
            type: 'integer'
        }
        #swagger.responses[204] = {
            description: 'Endereço deletado'
        }
    */
    enderecoController.delete(req, res, next)
});

export { enderecoRouter };
