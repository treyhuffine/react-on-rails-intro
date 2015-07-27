import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import API from "../API"

let _resources = [];

class ResourceEventEmitter extends AppEventEmitter {
  getAll() {
    return _resources
  }
}

let ResourceStore = new ResourceEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case Actions.RECEIVE_RESOURCES:
      _resources = action.payload;
      console.log("3. Inside the callback registered by store, need to emit a change now", action.payload);
      ResourceStore.emitChange();
      break;

    case Actions.ADD_NEW_RESOURCE:
      console.log(action);
      _resources.push(action.resource);
      ResourceStore.emitChange();
      break;

    case Actions.DELETE_RESOURCE:
      console.log("deleting", action);
      _resources.splice(action.resourceIndex, 1);
      ResourceStore.emitChange();
      break;

    default:
    // do nothing
  }
});

export default ResourceStore;
