import { ExamesService } from "@models/services/Exames";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class ExameController {
    constructor(@inject(ExamesService) private exameService: ExamesService) {}

    async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [page, limit] = [
                req.query.page.toString(), 
                req.query.limit.toString()
            ];

            const examesResponse = await this.exameService.getAll(page, limit);
            
            return res.status(200).send(examesResponse);

        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            const exameResponse = await this.exameService.getById(id);

            return res.status(200).send(exameResponse);

        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const exameRequest = req.body;
            const exameResponse = await this.exameService.create(exameRequest);

            return res.status(201).send(exameResponse);

        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [exameRequest, id] = [req.body, req.params.id];
            const exameResponse = await this.exameService.update(exameRequest, id);

            return res.status(200).send(exameResponse);

        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            await this.exameService.delete(id);

            return res.status(204).send();

        } catch (error) {
            next(error);
        }
    }
}