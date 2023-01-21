import model from "./roles.model";

const getAll = async () => {
  return await model.find({ deleted: false });
};

const getById = async (_id: string) => {
  return await model.findOne({ _id, deleted: false });
};

const add = async (body: any) => {
  return await model.create(body);
};

const update = async (_id: string, body: any) => {
  return await model.findOneAndUpdate({ _id }, body, { new: true });
};

const deleteById = async (_id: string) => {
  return await model.findOneAndUpdate({ _id }, { deleted: true }, { new: true });
};

export default { getAll, getById, add, update, deleteById };
