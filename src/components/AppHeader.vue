<template>
  <b-navbar toggleable="md"
            class="mb-3"
            type="dark"
            variant="dark">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="/">
      <img src="/logo.svg" width="40px" height="40px" class="d-inline-block align-top" alt="traceID">
    </b-navbar-brand>
    <b-collapse is-nav
                id="nav_collapse">

      <b-navbar-nav>
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
      this.$router.push({name: 'trace', params: {id: this.tid}});
    }
  }
}
</script>
