import { VacinaController } from "@controllers/Vacinas";
import { container } from "tsyringe";

const vacinaController = container.resolve(VacinaController);

export { vacinaController };