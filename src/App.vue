<template>
  <div>
    <AppHeader/>

    <b-container fluid
                 tag="main"
                 id="app"
                 v-cloak>

    <router-view></router-view>

    </b-container>

    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {AppHeader, AppFooter}
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
