<template>
  <b-container fluid
               tag="main"
               id="app"
               v-cloak>
    <AppHeader/>
    <div>foobar</div>
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
