import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const server = express();

server.use(cors());
server.use(express.json());

server.use(express.static(path.join(__dirname, "dist")));

server.get("/api/test", (req,res,next) => {
    res.send({message: "Hello!"});
})

server.get("/api/tester", (req,res,next) => {
    res.send({message: "Goodbye!"});
})

server.listen(2222, () => {
    console.log("Lisening...");
})