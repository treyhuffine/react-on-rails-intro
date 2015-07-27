import API from "../API"

export default {
  submitResource(resource) {
    API.postResource(resource);
  },
  deleteResource(resource) {
    API.deleteResource(resource);
  }
}
