import { ParentescosController } from "@controllers/Parentescos";
import { container } from "tsyringe";

const parentescosController = container.resolve(ParentescosController);

export { parentescosController };