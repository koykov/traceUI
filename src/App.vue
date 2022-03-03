<template>
  <b-container fluid tag="main" id="app" v-cloak>
    <b-navbar toggleable="md" class="mb-3" type="light" variant="light">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="/">traceID</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link to="/" itemscope>Home</router-link>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="#traceID" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Go to</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
  </b-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // ...
    };
  },
  methods: {
    onError(file, errorMsg) {
      this.error = errorMsg;
      this.showModal = true;
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
