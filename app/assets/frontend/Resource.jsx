import API from "./API";

let _resources = [];

export default {
  getAll() {
    return _resources
  },
  fetchAll() {
    API.getAllResources()
    .success(data => {
      console.log(data);
      _resources = data;
    })
    .error(error => {
      console.log(error);
    })
  }
}
