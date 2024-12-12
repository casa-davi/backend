import { 
  enderecoRequestSchema, 
  enderecoResponseSchema, 
  enderecoResponseSchemaPage 
} from "@models/types/schemas/endereco";
import { 
  exameRequestSchema, 
  exameResponseSchema, 
  exameResponseSchemaPage 
} from "@models/types/schemas/exame";
import { 
  pacienteRequestSchema, 
  pacienteResponseSchema, 
  pacienteResponseSchemaPage, 
  pacienteResponseViewSchema 
} from "@models/types/schemas/pacientes";
import { 
  parentescoRequestSchema, 
  parentescoResponseSchema, 
  parentescoResponseSchemaPage 
} from "@models/types/schemas/parentesco";
import { 
  vacinaRequestSchema, 
  vacinaResponseSchema, 
  vacinaResponseSchemaPage 
} from "@models/types/schemas/vacina";

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API CASA DE DAVI',
    description: 'Documentação da api da Casa de Davi',
  },
  host: 'localhost:4000',
  definitions: {
    // Example request
    EnderecoRequest: enderecoRequestSchema,
    ExameRequest: exameRequestSchema,
    PacienteRequest: pacienteRequestSchema,
    ParentescoRequest: parentescoRequestSchema,
    VacinaRequest: vacinaRequestSchema,

    // Example response
    EnderecoResponse: enderecoResponseSchema,
    ExameResponse: exameResponseSchema,
    PacienteResponse: pacienteResponseSchema,
    PacienteResponseView: pacienteResponseViewSchema,
    ParentescoResponse: parentescoResponseSchema,
    VacinaResponse: vacinaResponseSchema,

    // Example response list
    EnderecoResponseList: enderecoResponseSchemaPage,
    ExameResponseList: exameResponseSchemaPage,
    PacienteResponseList: pacienteResponseSchemaPage,
    ParentescoResponseList: parentescoResponseSchemaPage,
    VacinaResponseList: vacinaResponseSchemaPage
  }
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/all.ts'];

swaggerAutogen(outputFile, routes, doc);

