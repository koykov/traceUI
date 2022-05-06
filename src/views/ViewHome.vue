<template>
  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">Recent traces</h6>
    <table v-if="fetchOK"
           class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Datetime</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list"
          :key="item.id">
        <td><router-link :to="{name: 'trace', params: {id: item.id}}">{{ item.id }}</router-link></td>
        <td>{{ item.dt }}</td>
      </tr>
      </tbody>
    </table>
    <div v-else-if="fetchFail"
         class="alert alert-warning mt-4"
         role="alert">No traces available. Check <strong><i>traced</i></strong> service and refresh the page.</div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewHome",
  data() {
    return {
      fetchOK: this.fetchOK,
      fetchFail: this.fetchFail,
      list: this.list
    };
  },
  mounted() {
    this.fetchOK = false;
    this.fetchFail = false;
    fetch(process.env.VUE_APP_API_URL + "/traces", {"method": "GET"})
        .then(response => {
          if (response.ok) {
            return response.json()
          } else{
            console.error("Server returned " + response.status + " : " + response.statusText);
          }
        })
        .then(response => {
          this.list = response.payload;
          this.fetchOK = this.list.length > 0;
        })
        .catch(err => {
          console.log(err);
          this.fetchFail = true;
        });
  }
}
</script>

<style>
td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  text-align: initial;
  max-width: 0;
}
</style>
