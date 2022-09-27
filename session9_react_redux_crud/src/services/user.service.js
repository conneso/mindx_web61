import http from "../http-common";

class AuthService {
  login(username, password) {
    return http.post("/users/login", { username, password }).then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
