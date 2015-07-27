import AppDispatcher from "../dispatcher"
import Actions from "../constants"

export default {
  receiveResources(payload) {
    console.log("2. in server action, need to dispatch", payload);

    AppDispatcher.dispatch({
      actionType: Actions.RECEIVE_RESOURCES,
      payload
    })
  },
  addNewResource(resource) {
    console.log("submitting", resource);

    AppDispatcher.dispatch({
      actionType: Actions.ADD_NEW_RESOURCE,
      resource
    })
  },
  deleteResource(resourceIndex) {
    console.log(resourceIndex);
    console.log(Actions.DELETE_RESOURCE);
    AppDispatcher.dispatch({
      actionType: Actions.DELETE_RESOURCE,
      resourceIndex
    })
  }
}
