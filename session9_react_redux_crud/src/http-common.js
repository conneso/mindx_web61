import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'));
var token = ""
if (user && user.token) {
  token = user.token;
}

export default axios.create({
  baseURL: "http://localhost:30001/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}`
  },
});
