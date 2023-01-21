import { Router } from "express";

export interface IRoute {
    url: string;
    route: Router;
} 