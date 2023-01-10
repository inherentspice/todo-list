import axios from "axios";
const baseUrl = "/api/todos";

const getAll = (listName) => {
  if (listName) {
    return axios.get(`${baseUrl}?list=${listName}`)
  } else {
  return axios.get(baseUrl)
  }
};

const create = newObject => {
  return axios.post(baseUrl, newObject)
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
};

const deleteOne = id => {
  return axios.delete(`${baseUrl}/${id}`)
};

const deleteMany = (listName) => {
  return axios.delete(`${baseUrl}?list=${listName}`)
};

const TodoService = {
  getAll,
  create,
  update,
  deleteOne,
  deleteMany,
};

export default TodoService;
