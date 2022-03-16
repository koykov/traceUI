<template>
  <div>
    <AppHeader/>

    <b-container fluid
                 tag="main"
                 id="app"
                 v-cloak>

        <div class="my-3 p-3 bg-white rounded shadow-sm">
          <h6 class="border-bottom pb-2 mb-0">Recent traces</h6>
          <table class="table table-striped table-hover">
            <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Date/time</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
        </div>

    </b-container>

    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {AppHeader, AppFooter},
  data() {
    return {
      // ...
    };
  },
  methods: {
    onError(file, errorMsg) {
      this.error = errorMsg;
      this.showModal = true;
    },
    drawList() {

    }
  },
  filters: {
    json(value) {
      return JSON.stringify(value, null, 2);
    }
  },
  mounted() {
    this.listOK = false;
    fetch(process.env.VUE_APP_API_URL + "/list", {"method": "GET"})
        .then(response => {
          if (response.ok) {
            return response.json()
          } else{
            console.error("Server returned " + response.status + " : " + response.statusText);
          }
        })
        .then(response => {
          this.list = response.body;
          this.listOK = true;
        })
        .catch(err => {
          console.log(err);
        });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
