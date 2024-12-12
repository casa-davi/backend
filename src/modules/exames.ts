import { ExameController } from "@controllers/Exames";
import { container } from "tsyringe";

const exameController = container.resolve(ExameController);

export { exameController };