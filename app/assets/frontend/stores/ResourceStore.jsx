import AppDispatcher from "../dispatcher";
import Actions from "../constants";

import { EventEmitter } from "events";

let _resources = [];

class ResourceEventEmitter extends EventEmitter {
  getAll() {
    return _resources
  }
  emitChange() {
    this.emit("CHANGE");
    console.log("4. Change event emitted");
  }
  addChangeListener(cb) {
    this.on("CHANGE", cb);
  }
  removeChangeListener(cb) {
    this.removeListener("CHANGE", cb);
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

    default:
    // do nothing
  }
});

export default ResourceStore;
