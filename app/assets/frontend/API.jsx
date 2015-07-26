import ServerActionsCreator from "./actions/ServerActionsCreator";

export default {
  getAllResources() {
    $.get("/articles")
    .success(resources => {
      // create server action
      console.log("1. need action now");
      ServerActionsCreator.receiveResources(resources)
    })
    .error(error => {

    })
  }
}
