<template>
  <b-navbar toggleable="md"
            class="mb-3"
            type="dark"
            variant="dark">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="/">traceID</b-navbar-brand>
    <b-collapse is-nav
                id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{name: 'home'}">Home</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.stop.prevent="submitGOTO">
          <b-form-input v-model="tid"
                        size="sm"
                        class="mr-sm-2"
                        type="text"
                        placeholder="#traceID" />
          <b-button size="sm"
                    class="my-2 my-sm-0"
                    type="submit">Go to</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      tid: '',
    }
  },
  methods: {
    submitGOTO(){
      this.$router.push({name: 'view', params: {id: this.tid}});
    }
  }
}
</script>
