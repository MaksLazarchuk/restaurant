<template>
  <div>
    <header class="main-header">
      <div class="container">
        <img
          class="background-main"
          src="@/assets/images/header-bg.jpg"
          alt=""
        />
        <div class="interface">
          <div class="inter-container1">
            <a class="int" href="#home">HOME</a>
            <a class="int" href="#about">ABOUT</a>
            <a class="int" href="#team">TEAM</a>
            <a class="int" href="#booking">BOOKING</a>
          </div>
          <div class="inter-container2">
            <a class="int right" href="#menu">MENU</a>
            <a class="int right" href="#galerie">GALERIE</a>
            <a class="int right" href="#events">EVENTS</a>
            <a class="int right" href="#contact">CONTACT</a>
          </div>
        </div>
        <div class="logo">
          <LogoIcon />
        </div>
        <div class="rest-people">
          <p class="subtitle">{{ subtitle }}</p>
          <p class="title">{{ title }}</p>
          <div class="line" />
          <div class="button-main">
            <button class="table" type="submit">BOOK TABLE</button>
            <button class="explore" type="submit">EXPLORE</button>
          </div>
          <p class="returned">{{ returned }}</p>
          <div class="link">
            <div class="border-link">
              <img class="facebook" src="@/assets/images/facebook.svg" alt="" />
            </div>
            <div class="border-link">
              <img class="twiter" src="@/assets/images/twiter.svg" alt="" />
            </div>
            <div class="border-link">
              <img
                class="instagram"
                src="@/assets/images/instagram.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="ellipse-border">
          <div class="background-ellipse" />
          <img class="ellipse" src="@/assets/images/Ellipse.svg" alt="" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import LogoIcon from "../Icons/LogoIcon";

export default {
  name: "Header",
  components: { LogoIcon },
  props: ["subtitle", "title", "returned"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  .container {
    height: 800px;
    position: relative;
  }
  .background-main {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .interface {
    display: flex;
  }
  .inter-container1 {
    display: flex;
    position: relative;
  }
  .inter-container2 {
    display: flex;
    position: relative;
    left: 220px;
    width: 688px;
  }
  .int {
    text-decoration: none;
    position: relative;
    width: 133px;
    height: 100px;
    left: 80px;
    top: 0px;
    font-family: "Open Sans Bold";
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .logo {
    position: absolute;
    width: 150px;
    height: 150px;
    left: 645px;
    top: 25px;
  }
  .rest-people {
    position: relative;
    width: 1440px;
    height: 249px;
    left: 1px;
  }
  .subtitle {
    width: 1440px;
    height: 18.39px;
    margin-left: 1px;
    margin-top: 226px;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #ffffff;
  }
  .title {
    width: 1440px;
    font-family: "Banny";
    height: 139px;
    margin-top: -25px;
    font-size: 96px;
    line-height: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  .line {
    position: absolute;
    width: 60px;
    height: 5.11px;
    left: 691px;
    top: 141.21px;
    background: #e8c300;
    border-radius: 50px;
  }
  .button-main {
    position: absolute;
    display: flex;
    margin-left: 500px;
    margin-top: -60px;
  }
  .table {
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #e8c300;
    box-sizing: border-box;
    background: #e8c300;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .explore {
    width: 200px;
    height: 60px;
    margin-left: 43px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    background: transparent;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
  .returned {
    position: absolute;
    width: 698px;
    height: 60px;
    left: -245px;
    top: 82px;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #ffffff;
    transform: rotate(-90deg);
  }
  .link {
    position: absolute;
    width: 60px;
    height: 220px;
    right: 79px;
    top: -23px;
  }
  .border-link {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: 20px;
  }
  .facebook {
    display: flex;
    margin-top: 19px;
    margin-left: 24px;
  }
  .twiter {
    display: flex;
    margin-top: 22px;
    margin-left: 20px;
  }
  .instagram {
    display: flex;
    margin-top: 22px;
    margin-left: 20px;
  }
  .ellipse-border {
    position: absolute;
    left: 690px;
    top: 657px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .background-ellipse {
    position: absolute;
    border-radius: 50%;
    background-color: white;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .ellipse {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>
