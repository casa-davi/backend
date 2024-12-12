import { ParentescosService } from "@models/services/Parentescos";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class ParentescosController {
    constructor(
        @inject(ParentescosService) private parentescosService: ParentescosService
    ) {}

    async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [page, limit] = [
                req.query.page.toString(),
                req.query.limit.toString()
            ];

            const parentescos = await this.parentescosService.getAll(page, limit);
            
            return res.status(200).json(parentescos);

        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params
            const parentesco = await this.parentescosService.getById(id);

            return res.status(200).json(parentesco);

        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const parentesco = await this.parentescosService.create(req.body);
            return res.status(201).json(parentesco);

        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [parentesco, id] = [req.body, req.params.id];
            const parentescoResponse = await this.parentescosService.update(parentesco, id);

            return res.status(200).json(parentescoResponse);

        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            await this.parentescosService.delete(id);

            return res.status(204).end();

        } catch (error) {
            next(error);
        }
    }
}