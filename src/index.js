import express from 'express';
import bodyParser from 'body-parser';
import { serverConfig } from './config/serverConfig.js';

const setUpAndStartServer = async () => {
    
    const app = express();
    const Port = serverConfig.port || 4000; 

    app.use(bodyParser.json());

    app.listen(Port, () => {
        console.log(`Server Started at ${Port}...`);
    });
}

setUpAndStartServer();
