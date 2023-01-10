import axios from "axios";
const baseUrl = "/api/todolists";

const getAll = () => {
  return axios.get(baseUrl)
};

const create = newObject => {
  return axios.post(baseUrl, newObject)
};

const deleteOne = id => {
  return axios.delete(`${baseUrl}/${id}`)
};

const TodoListService = {
  getAll,
  create,
  deleteOne
};

export default TodoListService;
