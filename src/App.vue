<template>
  <div>
    <AppHeader/>

    <b-container fluid
                 tag="main"
                 id="app"
                 v-cloak>

        <div class="my-3 p-3 bg-white rounded shadow-sm">
          <h6 class="border-bottom pb-2 mb-0">Recent traces</h6>
          <table v-if="listOK"
              class="table table-striped table-hover">
            <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Date/time</th>
              <th scope="colgroup" colspan="2">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in list"
                :key="item.id">
              <th scope="row">{{item.id}}</th>
              <td>{{item.dt}}</td>
              <td><router-link :to="{name: 'view', params: {id: item.id}}">View</router-link></td>
              <td><router-link :to="{name: 'dl', params: {id: item.id}}">Download</router-link></td>
            </tr>
            </tbody>
          </table>
          <div v-else
               class="alert alert-warning mt-4"
               role="alert">No traces available.</div>
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
      listOK: this.listOK,
      list: this.list
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
          this.list = response.payload;
          this.listOK = this.list.length > 0;
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
