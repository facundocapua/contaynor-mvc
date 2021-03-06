import Route from "@ember/routing/route";
import fetch from "fetch";

export default class TrackRoute extends Route {
  afterModel(model, transition) {
    if (!model.artistName) {
      this.transitionTo("index");
    }
  }
}
