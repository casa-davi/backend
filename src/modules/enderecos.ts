import { EnderecoController } from "@controllers/Enderecos";
import { container } from "tsyringe";

const enderecoController = container.resolve(EnderecoController);

export { enderecoController };