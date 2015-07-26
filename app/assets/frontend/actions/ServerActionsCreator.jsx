import AppDispatcher from "../dispatcher"
import Actions from "../constants"

export default {
  receiveResources(payload) {
    console.log("2. in server action, need to dispatch", payload);

    AppDispatcher.dispatch({
      actionType: Actions.RECEIVE_RESOURCES,
      payload
    })
  }
}
