import { EnderecosService } from "@models/services/Enderecos";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class EnderecoController {
    constructor(
        @inject(EnderecosService) private enderecoService: EnderecosService
    ) {}

    async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [page, limit] = [
                req.query.page.toString(), 
                req.query.limit.toString()
            ];
            
            const enderecosResponse = await this.enderecoService.getAll(page, limit);
            
            return res.status(200).send(enderecosResponse);

        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            const enderecoResponse = await this.enderecoService.getById(id);

            return res.status(200).send(enderecoResponse);

        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const enderecoRequest = req.body;
            const enderecoResponse = await this.enderecoService.create(enderecoRequest);
            
            return res.status(201).send(enderecoResponse);

        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [endereco, id] = [req.body, req.params.id];

            const enderecoResponse = await this.enderecoService.update(endereco, id);
            return res.status(200).send(enderecoResponse);

        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            await this.enderecoService.delete(id);
            return res.status(204).send();

        } catch (error) {
            next(error);
        }
    }
} 