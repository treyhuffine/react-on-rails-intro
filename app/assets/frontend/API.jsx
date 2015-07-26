import ServerActionsCreator from "./actions/ServerActionsCreator";

export default {
  getAllResources() {
    $.get("/articles")
    .success(data => {
      // create server action
      console.log("need action now");
      ServerActionsCreator.receiveResources
    })
    .error(error => {

    })
  }
}
