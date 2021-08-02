import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SongsComponent extends Component {
  @tracked query = "";
  @tracked loading = false;
  @tracked songs = [];

  @action
  search(e) {
    this.query = e.target.value;
    if (this.query !== '') {
      this.loading = true;
      const model = this;
      $.ajax("https://itunes.apple.com/search", {
        type: "GET",
        data: {
          media: "music",
          term: this.query
        },
        dataType: "jsonp",
        jsonpCallback: "getJson"
      })
        .then((data) => {
          model.songs = data.results;
          this.loading = false;
          console.log(data.results);
        })
        .catch((e) => {
        });
    }
  }
}
