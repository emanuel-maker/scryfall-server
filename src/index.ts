import bodyParser from "body-parser";
import express from "express";
import allRoutes from './core/routes';
import StorageModule from "./core/storage/StorageModule";

const app = express();
const port = 8085;

app.use(bodyParser.json());

Object.keys(allRoutes).forEach(key => {
    // @ts-ignore
    app.use(`/${key}`, allRoutes[key]);
});

app.get('/health', (_, res) => {
    res.json({ Ok : true });
});

const start = async () => {

    try{
        app.listen(port, async () => {
            const storageModule =  new StorageModule();
            await storageModule.init();
            console.log(`#Listening on port ${port}`);
        });
    }catch(error){
        console.log(error);
    }
}

start().catch(error => console.log(error));