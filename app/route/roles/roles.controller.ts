import service from "./roles.service";
import { Request, Response } from 'express';
import ENV from '../../env'

const getAll = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.getAll();
  _res.send({ data, status: "success", message: "Get all roles success" });
};

const getById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.getById(id);
  _res.send({ data: [data], status: "success", message: "Get role success" });

};

const add = async (_req: Request<any>, _res: Response<any>) => {
  const data = await service.add(_req.body);
  _res.send({ data: [data], status: "success", message: "Create role success" });
};

const update = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.update(id, _req.body);
  _res.send({ data: [data], status: "success", message: "Update role success" });
};

const deleteById = async (_req: Request<any>, _res: Response<any>) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({ data: [data], status: "success", message: "Delete role success" });

};

export { getAll, getById, add, update, deleteById };
