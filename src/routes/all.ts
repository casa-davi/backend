import { Router } from "express";
import { pacienteRouter } from "./pacientes";
import { vacinaRouter } from "./vacinas";
import { enderecoRouter } from "./enderecos";
import { exameRouter } from "./exames";
import { parentescoRouter } from "./parentescos";

const routes = Router();

routes.use('/pacientes', pacienteRouter);
routes.use('/vacinas', vacinaRouter);
routes.use('/enderecos', enderecoRouter);
routes.use('/parentescos', parentescoRouter);
routes.use('/exames', exameRouter);

export { routes };