import { PacienteController } from "@controllers/Pacientes";
import { container } from "tsyringe";

const pacienteController = container.resolve(PacienteController);

export { pacienteController };