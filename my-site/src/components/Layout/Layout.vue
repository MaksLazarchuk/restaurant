<template>
  <div>
    <Header
      :subtitle="common.subtitle"
      :title="common.title"
      :returned="common.returned"
    />
    <Nav
      :aboutUsTitle="common.aboutUsTitle"
      :aboutUsDescription="common.aboutUsDescription"
      :aboutImg="common.aboutImg"
      :masterChefTitle="common.masterChefTitle"
      :masterChefDescription="common.masterChefDescription"
    />
    <Article :specialities="common.specialities" :specialitiesTitle="common.specialitiesTitle" :specialitiesDescription="common.specialitiesDescription" />
    <Aside />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Nav from "./components/Nav/Nav.vue";
import Article from "./components/Article/Article.vue";
import Aside from "./components/Aside/Aside.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "Layout",
  components: { Header, Nav, Article, Aside, Footer },
  props: ["common"],
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #e5e5e5;
  scroll-behavior: smooth;
}
.container {
  width: 1440px;
  margin: 0 auto;
}
</style>
