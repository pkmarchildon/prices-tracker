import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

/* Middlewares */
// Security
app.use(helmet());
app.use(
  cors({
    origin: process.env.ORIGIN_URL
  })
);

// Logging
app.use(morgan('combined'));

// Others
app.use(express.json());

/* Routes */

export default app;
