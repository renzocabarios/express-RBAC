
import express, { Express } from "express";
import connectDB from "./app/db";
import ENV from "./app/env/index";
import { IRoute } from './app/interfaces'
import { routes } from './route'
import { middlewares } from './middlewares'
const app: Express = express();

// middlewares
middlewares.forEach((middleware: any) => {
  app.use(middleware);
})

//routes
routes.forEach((route: IRoute) => {
  app.use(route.url, route.route);
})

//initialization
const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
