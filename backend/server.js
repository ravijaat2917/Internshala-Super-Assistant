import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/build")));

const port = process.env.port || 8080 ;

app.use('/', (req, res) => res.send('Welcome To Assignment'));

app.listen(port,()=> console.log(`Server Listening on PORT ${port}`))