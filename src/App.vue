<template>
  <b-container fluid
               tag="main"
               id="app"
               v-cloak>
    <AppHeader/>
    <header class="text-center">
      <a href="https://github.com/alexsasharegan/vue-transmit"
         target="_blank">
        <img class="img--logo"
             src="https://raw.githubusercontent.com/alexsasharegan/vue-transmit/master/docs/logo.png" alt="">
      </a>
      <h1 class="mb-5"><code>&lt;vue-transmit&gt;</code></h1>
    </header>
    <b-container tag="main">
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="6">

        </b-col>
      </b-row>
      <b-row class="my-3">

      </b-row>
    </b-container>
    <b-modal v-model="showModal"
             title="File Upload: Error">
      <p class="bg-danger text-white p-3 my-2"
         v-html="error"></p>
    </b-modal>
    <AppFooter/>
  </b-container>
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
    submitGOTO(){
      //this.$router.push({path: '/trace', query:{key: value}})
    }
  },
  filters: {
    json(value) {
      return JSON.stringify(value, null, 2);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
