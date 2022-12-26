import axios from "axios";


const logIn = (userObject) => {
  return axios.post("/log-in", userObject);
}

const signUp = (userObject) => {
  return axios.post("/sign-up", userObject);
}

const logOut = () => {
  return axios.get("/log-out");
}

const isAuthenticated = () => {
  return axios.get("/api/user");
}

export default {
  logIn,
  signUp,
  logOut,
  isAuthenticated,
}
