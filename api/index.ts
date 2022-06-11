/* eslint-disable */
import * as dotenv from 'dotenv';
import express from 'express';
import { router } from './routes/Routes.router';
import cors from 'cors';
import {AppDataSource} from "./database/config/datasource.config";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */
app.use(express.json());
app.use(cors());
app.use('/', router);

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Initialise postgres connection
AppDataSource.initialize()
    .then(async () => {
        console.log('Now connected to Postgres');
    })
    .catch((error) => console.log(error));

/**
 * Webpack HotModuleReplacement Activation
 */
type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void,
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}

export default app;
