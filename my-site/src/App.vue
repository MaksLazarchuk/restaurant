<template>
  <div id="app">
    <Layout v-if="common" :common="common" />
  </div>
</template>

<script>
import Layout from "./components/Layout/Layout.vue";

export default {
  name: "App",
  components: { Layout },
  created() {
    fetch("http://localhost/api/v1/common")
      .then((response) => response.json())
      .then((data) => {
        this.common = data;
        console.log(data);
      });
  },
  data() {
    return {
      common: null,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/font";
</style>
