
import bodyParser from "body-parser";
import cors from 'cors'
import { verifyToken } from './app/middleware'

export const middlewares: any[] = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cors(),
    verifyToken,
];

