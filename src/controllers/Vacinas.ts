import { VacinasService } from "@models/services/Vacinas";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class VacinaController {
    constructor( 
        @inject(VacinasService) private vacinaService: VacinasService 
    ) {}

    async getAll(req: Request, res: Response, next: NextFunction ): Promise<Response> {
        try {
            const [page, limit] = [
                req.query.page.toString(),
                req.query.limit.toString()
            ]

            const vacinasResponse = await this.vacinaService.getAll(page, limit);
            
            return res.status(200).send(vacinasResponse);

        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            const vacinaResponse = await this.vacinaService.getById(id);
            return res.status(200).send(vacinaResponse);

        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const vacinaRequest = req.body;
            const vacinaResponse = await this.vacinaService.create(vacinaRequest);
            return res.status(201).send(vacinaResponse);

        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [vacina, id] = [req.body, req.params.id];

            const vacinaResponse = await this.vacinaService.update(vacina, id);
            return res.status(200).send(vacinaResponse);

        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            await this.vacinaService.delete(id);
            return res.status(204).send();

        } catch (error) {
            next(error);
        }
    }
}