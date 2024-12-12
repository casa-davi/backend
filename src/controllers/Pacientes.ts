import { PacientesService } from "@models/services/Pacientes";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class PacienteController {
    constructor( 
        @inject(PacientesService) private pacienteService: PacientesService 
    ) {}

    async getAll(req: Request, res: Response, next: NextFunction ): Promise<Response> {
        try {
            const [page, limit] = [
                req.query.page.toString(),
                req.query.limit.toString()
            ];

            const pacientesResponse = await this.pacienteService.getAll(page, limit);
            
            return res.status(200).send(pacientesResponse);

        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            const pacienteResponse = await this.pacienteService.getById(id);
            return res.status(200).send(pacienteResponse);

        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const pacienteRequest = req.body;
            const pacienteResponse = await this.pacienteService.create(pacienteRequest);
            return res.status(201).send(pacienteResponse);

        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const [paciente, id] = [req.body, req.params.id];

            const pacienteResponse = await this.pacienteService.update(paciente, id);
            return res.status(200).send(pacienteResponse);

        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;
            await this.pacienteService.delete(id);
            return res.status(204).send();

        } catch (error) {
            next(error);
        }
    }
    
}