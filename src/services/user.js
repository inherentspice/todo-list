import axios from "axios";


const logIn = (userObject) => {
  return axios.post("/log-in", userObject);
}

const signUp = (userObject) => {
  return axios.post("/sign-up", userObject);
}

export default {
  logIn,
  signUp,
}
