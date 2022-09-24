import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }
  findByTitle(title){
    return http.get(`/tutorials/findByTitle?title=${title}`)
  }
  get(id){
    return http.get(`/tutorials/findById/${id}`);
  }
  create(data){
    return http.post('/tutorials',data)
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id){
    return http.delete(`/tutorials?id=${id}`)
  }
  deleteAll(){
    return http.delete('/deleteAll')
  }
}

export default new TutorialDataService();
