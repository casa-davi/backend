import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json';

const swaggerSetup = swaggerUi.setup(swaggerDocument);

export { swaggerSetup };