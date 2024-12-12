import "reflect-metadata";

import express from 'express';

import * as swaggerUi from 'swagger-ui-express';

import { corsConfig } from "@security/cors";
import { Connect } from '../models/connect';
import { routes } from "src/routes/all";
import { swaggerSetup } from "src/doc/swagger-setup";

const app = express();
const PORT = 4000;

Connect.inicialize();

app.use(corsConfig);
app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUi.serve, swaggerSetup);

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
