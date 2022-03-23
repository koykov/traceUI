<template>
  <div>
    {{ tid }}
  </div>
</template>

<script>
export default {
  name: "ViewTrace",
  data() {
    return {
      tid: this.$route.params.id
    };
  }
}
</script>

<style></style>
