<template>
  <div>
    <footer class="maps-script">
      <div class="container">
        <div
          id="home"
          style="overflow:hidden;width: 1440px;position: relative;"
        >
          <iframe
            width="1440"
            height="475"
            src="https://maps.google.com/maps?width=1440&amp;height=475&amp;hl=en&amp;q=Rovno%2C%20Ukraine+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <br />
        <div class="rectangle" />
        <p class="script">© Copyright Mindblister 2019</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.maps-script {
  .container {
    height: 575px;
    position: relative;
  }
  .rectangle {
    position: absolute;
    width: 1440px;
    height: 100px;
    left: 0px;
    top: 475px;
    background: rgba(0, 0, 0, 0.9);
  }
  .script {
    position: absolute;
    width: 1440px;
    height: 100px;
    font-family: "Open Sans Regular";
    font-size: 12px;
    line-height: 12px;
    display: flex;
    margin-top: -20px;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
