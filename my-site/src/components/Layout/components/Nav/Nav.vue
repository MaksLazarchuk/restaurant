<template>
  <div>
    <nav id="about" class="bloc1">
      <div class="container">
        <img class="about-img" src="@/assets/images/about-img.png" alt="" />
        <div class="rectangle-frame" />
        <a href="#" class="about-us">ABOUT US</a>
        <div class="line" />
        <div class="bloc1-text">
          <a href="#" class="about-us-title">{{ aboutUsTitle }}</a>
          <a href="#" class="about-us-description">{{ aboutUsDescription }}</a>
        </div>
      </div>
    </nav>
    <nav class="bloc2" id="team">
      <div class="container">
        <img class="bloc2-bg" src="@/assets/images/specialtys-bg.jpg" alt="" />
        <a href="#" class="our-team">OUR TEAM</a>
        <img class="rectangle-img" src="@/assets/images/Rectangle.png" alt="" />
        <div class="rectangle-frame" />
        <a href="#" class="master-chef">MASTER CHEF</a>
        <div class="line" />
        <div class="bloc2-text">
          <a href="#" class="master-chef-title">{{ masterChefTitle }}</a>
          <a href="#" class="master-chef-description">{{
            masterChefDescription
          }}</a>
        </div>
      </div>
    </nav>
    <nav class="bloc3" id="booking">
      <div class="container">
        <img class="clock-img" src="@/assets/images/clock.png" alt="" />
        <div class="rectangle-frame" />
        <a href="#" class="book">BOOK A TABLE</a>
        <div class="line" />
        <form class="zip-code">
          <input
            class="input-border name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            class="input-border email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            class="input-border phone"
            type="tel"
            placeholder="Phone"
            required
          />
          <select required name="people" class="input-border">
            <option value="people">People</option>
            <option value="number">1</option>
            <option value="number">2</option>
            <option value="number">3</option>
            <option value="number">4</option>
            <option value="number">5</option>
            <option value="number">6</option>
            <option value="number">7</option>
            <option value="number">8</option>
          </select>
          <input
            class="input-border date"
            type="date"
            value="2020-07-13"
            required
          />
          <select required name="time" class="input-border">
            <option value="time">Time</option>
            <option value="number">8</option>
            <option value="number">9</option>
            <option value="number">10</option>
            <option value="number">11</option>
            <option value="number">12</option>
            <option value="number">13</option>
            <option value="number">15</option>
            <option value="number">16</option>
            <option value="number">17</option>
            <option value="number">18</option>
            <option value="number">19</option>
            <option value="number">20</option>
          </select>
          <button class="button-book" type="submit">BOOK NOW</button>
        </form>
        <p class="work-time">{{ workTime }}</p>
      </div>
    </nav>
  </div>
</template>

<script>
import { workTime } from "../../../../__mocks__";

export default {
  name: "Nav",
  props: [
    "aboutUsTitle",
    "aboutUsDescription",
    "masterChefTitle",
    "masterChefDescription",
  ],
  data() {
    return {
      workTime,
    };
  },
};
</script>

<style lang="scss" scoped>
.bloc1 {
  .container {
    height: 675px;
    position: relative;
    background: white;
  }
  .about-img {
    position: absolute;
    width: 475px;
    height: 475px;
    right: 204px;
    top: 100px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  .rectangle-frame {
    position: absolute;
    width: 250px;
    height: 250px;
    right: 79px;
    top: 213px;
    border: 20px solid #e8c300;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .about-us {
    font-family: "Banny";
    position: absolute;
    width: 270.44px;
    height: 56px;
    left: 272.92px;
    top: 217px;
    text-decoration: none;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
  }
  .line {
    position: absolute;
    width: 59.19px;
    height: 5px;
    left: 378.58px;
    top: 273px;
    background: #e8c300;
    border-radius: 50px;
  }
  .bloc1-text {
    position: absolute;
    width: 600px;
    height: 180px;
    left: 81px;
    top: 278px;
    line-height: 28px;
    align-items: flex-end;
    text-align: center;
  }
  .about-us-title {
    display: flex;
    text-decoration: none;
    color: #000000;
    font-family: "Open Sans Bold";
    font-size: 18px;
    margin-top: 10px;
  }
  .about-us-description {
    display: flex;
    text-decoration: none;
    color: #000000;
    font-family: "Open Sans Regular";
    font-size: 14px;
    margin-top: 15px;
  }
}
.bloc2 {
  .container {
    height: 675px;
    position: relative;
  }
  .bloc2-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .our-team {
    position: absolute;
    width: 150px;
    height: 20px;
    top: 40px;
    left: 645px;
    font-family: "Open Sans Bold";
    font-size: 12px;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #ffffff;
  }
  .rectangle-img {
    position: absolute;
    width: 475px;
    height: 475px;
    left: 193px;
    top: 100px;
    box-shadow: 0px 0px 50px #000000;
    border-radius: 5px;
  }
  .rectangle-frame {
    position: absolute;
    width: 250px;
    height: 250px;
    left: 80px;
    top: 213px;
    border: 20px solid #e8c300;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .master-chef {
    font-family: "Banny";
    position: absolute;
    width: 600px;
    height: 56px;
    left: 740px;
    top: 217px;
    text-decoration: none;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: #ffffff;
  }
  .line {
    position: absolute;
    width: 64.73px;
    height: 5px;
    left: 1007.14px;
    top: 273px;
    background: #e8c300;
    border-radius: 50px;
  }
  .bloc2-text {
    position: absolute;
    width: 598.94px;
    height: 180px;
    left: 740px;
    top: 278px;
    line-height: 28px;
    align-items: flex-end;
    text-align: center;
  }
  .master-chef-title {
    display: flex;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Open Sans Bold";
    font-size: 18px;
    margin-top: 10px;
  }
  .master-chef-description {
    display: flex;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Open Sans Regular";
    font-size: 14px;
    margin-top: 15px;
  }
}
.bloc3 {
  .container {
    height: 675px;
    position: relative;
    background: white;
  }
  .clock-img {
    position: absolute;
    width: 475px;
    height: 475px;
    right: 193px;
    top: 100px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  .rectangle-frame {
    position: absolute;
    width: 226px;
    height: 226px;
    right: 80px;
    top: 225px;
    border: 20px solid #e8c300;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .book {
    font-family: "Banny";
    position: absolute;
    width: 565px;
    height: 56px;
    left: 135px;
    top: 162px;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
    border-radius: 5px;
  }
  .line {
    position: absolute;
    width: 60.91px;
    height: 5px;
    left: 387px;
    top: 218px;
    background: #e8c300;
    border-radius: 5px;
  }
  .zip-code {
    position: absolute;
    width: 575.49px;
    height: 285px;
    left: 125px;
    top: 233px;
  }
  .input-border {
    position: relative;
    width: 276.8px;
    height: 60px;
    margin-left: 10px;
    margin-top: 10px;
    font-family: "Open Sans Regular";
    font-size: 14px;
    line-height: 19px;
    align-items: center;
    text-indent: 20px;
    color: rgba(51, 51, 51, 0.5);
    border-radius: 5px;
    background: #e5e5e5;
    border: #e5e5e5;
  }
  ::placeholder {
    color: rgba(51, 51, 51, 0.5);
  }
  .email {
    width: 272.83px;
  }
  .date {
    width: 275.83px;
    text-indent: 10px;
  }
  .phone {
    width: 272.83px;
  }
  .name {
    width: 272.83px;
  }
  .button-book {
    position: relative;
    width: 563.58px;
    height: 60px;
    margin-left: 10px;
    margin-top: 10px;
    background: #e8c300;
    border-radius: 5px;
    border: #e8c300;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  .work-time {
    position: absolute;
    width: 1440px;
    height: 20px;
    left: 0px;
    top: 610px;
    font-family: "Open Sans Bold";
    font-size: 15px;
    line-height: 12px;
    text-align: center;
    color: rgba(51, 51, 51, 0.5);
    border-radius: 5px;
  }
}
</style>
