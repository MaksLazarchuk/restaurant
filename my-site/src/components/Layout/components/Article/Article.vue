<template>
  <div>
    <article class="chocolate">
      <div class="container">
        <img
          class="chocolate-bg"
          src="@/assets/images/chocolate-bg.jpg"
          alt=""
        />
        <a href="" class="specialties">SPECIALTIES</a>
        <img class="ice-cream-img" src="@/assets/images/ice-cream.png" alt="" />
        <div class="rectangle-frame" />
        <a href="#" class="chocolate-pancakes">{{ specialities }}</a>
        <div class="line" />
        <div class="chocolate-text">
          <a href="#" class="specialities-title">{{ specialitiesTitle }}</a>
          <a href="#" class="specialities-description">{{ specialitiesDescription }}</a>
        </div>
        <div class="circle1" />
        <div class="circle2" />
        <div class="circle3" />
      </div>
    </article>
    <article class="menu" id="menu">
      <div class="container">
        <a href="#" class="delicious-menu">DELICIOUS MENU</a>
        <div class="line" />
        <a href="#" class="phrase">{{ phrase }}</a>
        <div class="food">
          <a href="#" class="food-menu">SOUPE</a>
          <a href="#" class="food-menu">PIZZA</a>
          <a href="#" class="food-menu">PASTA</a>
          <a href="#" class="food-menu">DESERT</a>
          <a href="#" class="food-menu">WINE</a>
          <a href="#" class="food-menu">BEER</a>
          <a href="#" class="food-menu food-menu7">DRINKS</a>
        </div>
        <div class="name-food-price">
          <div class="food-container" v-for="(dish, i) in dishes" :key="i">
            <a href="#" class="name">{{ dish.name }}</a>
            <a href="#" class="price">{{ dish.price }}</a>
            <a href="#" class="ingredients">{{ dish.ingredients }}</a>
          </div>
        </div>
      </div>
    </article>
    <article class="measures" id="events">
      <div class="container">
        <img class="measures-bg" src="@/assets/images/measures.jpg" alt="" />
        <img class="rings" src="@/assets/images/rings.png" alt="" />
        <div class="rectangle-frame1" />
        <div class="black-rectangle1" />
        <p class="weddings">WEDDINGS</p>
        <img class="corporate-img" src="@/assets/images/corporate.png" alt="" />
        <div class="rectangle-frame2" />
        <div class="black-rectangle2" />
        <p class="corporate">CORPORATE PZTIES</p>
        <img
          class="mazzo"
          id="galerie"
          src="@/assets/images/mazzo.jpg"
          alt=""
        />
        <img
          class="modern-restaurant"
          src="@/assets/images/modern-restaurant.jpg"
          alt=""
        />
        <img class="cafe" src="@/assets/images/cafe.jpg" alt="" />
        <img
          class="classic-restaurant"
          src="@/assets/images/classic-restaurant.jpg"
          alt=""
        />
      </div>
    </article>
  </div>
</template>

<script>
import {
  dishes,
  phrase,
} from "../../../../__mocks__";

export default {
  name: "Article",
  props:["specialities", "specialitiesTitle", "specialitiesDescription", ],
  data() {
    return {
      dishes,
      phrase,
    };
  },
};
</script>

<style lang="scss" scoped>
.chocolate {
  .container {
    height: 675px;
    position: relative;
  }
  .chocolate-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .specialties {
    position: absolute;
    width: 1440px;
    height: 20px;
    left: 0px;
    top: 45px;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
  }
  .ice-cream-img {
    position: absolute;
    width: 475px;
    height: 475px;
    left: 205px;
    top: 100px;
    box-shadow: 0px 0px 50px #000000;
    border-radius: 5px;
  }
  .rectangle-frame {
    position: absolute;
    width: 250px;
    height: 262.72px;
    left: 81px;
    top: 206.14px;
    border: 20px solid #e8c300;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .chocolate-pancakes {
    font-family: "Banny";
    position: absolute;
    width: 600px;
    height: 56px;
    left: 761px;
    top: 217px;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
  }
  .line {
    position: absolute;
    width: 64.73px;
    height: 5px;
    left: 1028.14px;
    top: 273px;
    background: #e8c300;
    border-radius: 50px;
  }
  .chocolate-text {
    position: absolute;
    width: 600px;
    height: 180px;
    right: 81px;
    top: 278px;
    line-height: 28px;
    align-items: flex-end;
    text-align: center;
  }
  .specialities-title {
    display: flex;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Open Sans Bold";
    font-size: 18px;
    margin-top: 10px;
  }
  .specialities-description {
    display: flex;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Open Sans Regular";
    font-size: 14px;
    margin-top: 15px;
  }
  .circle1 {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 686px;
    top: 620px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
  .circle2 {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 716px;
    top: 620px;
    background: #ffffff;
    border-radius: 50%;
  }
  .circle3 {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 746px;
    top: 620px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
}
.menu {
  .container {
    height: 920px;
    position: relative;
    background: white;
  }
  .delicious-menu {
    font-family: "Banny";
    position: absolute;
    width: 1280px;
    height: 56px;
    left: 80px;
    top: 100px;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
  }
  .line {
    position: absolute;
    width: 61.06px;
    height: 5px;
    left: 690px;
    top: 156px;
    background: #e8c300;
    border-radius: 50px;
  }
  .phrase {
    position: absolute;
    width: 565px;
    height: 52px;
    left: 438px;
    top: 161px;
    font-family: "Open Sans Bold";
    font-size: 18px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    color: #000000;
    text-decoration: none;
    margin-top: 26px;
  }
  .food {
    position: absolute;
    display: flex;
    width: 840px;
    height: 50px;
    left: 300px;
    top: 287px;
  }
  .food-menu {
    position: relative;
    height: 50px;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 18px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: #333333;
    text-decoration: none;
    margin-left: 40px;
    margin-right: 40px;
  }
.food-menu::after{
    width: 1px;
    height: 50px;
    background: rgba(51, 51, 51, 0.2);
    position: absolute;
    right: -45px;
    content: "";
  }
  .food-menu7::after{
    display: none;
  }
  .name-food-price {
    position: absolute;
    width: 1440px;
    height: 432px;
    top: 388px;
    display: flex;
    flex-wrap: wrap;
  }
  .food-container {
    width: 363px;
    height: 66px;
    margin-left: 85px;
  }
  .name {
    font-family: "Banny";
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #333333;
  }
  .price {
    font-family: "Banny";
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #333333;
    margin-left: 15px;
  }
  .ingredients {
    font-family: "Banny";
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
    color: #838080;
    margin-top: 5px;
    display: flex;
  }
}
.measures {
  .container {
    height: 1035px;
    position: relative;
  }
  .measures-bg {
    position: absolute;
    width: 100%;
    height: 675px;
    left: 0;
    top: 0;
  }
  .rings {
    position: absolute;
    width: 475px;
    height: 475px;
    left: 205px;
    top: 100px;
    box-shadow: 0px 0px 50px #000000;
    border-radius: 5px;
  }
  .corporate-img {
    position: absolute;
    width: 475px;
    height: 475px;
    left: 760px;
    top: 100px;
    box-shadow: 0px 0px 50px #000000;
    border-radius: 5px;
  }
  .rectangle-frame1 {
    position: absolute;
    width: 250px;
    height: 250px;
    left: 80px;
    top: 213px;
    border: 20px solid #e8c300;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .rectangle-frame2 {
    position: absolute;
    width: 250px;
    height: 250px;
    right: 80px;
    top: 213px;
    border: 20px solid #e8c300;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .black-rectangle1 {
    position: absolute;
    width: 80px;
    height: 475px;
    left: 600px;
    top: 100px;
    background: #000000;
    border-radius: 0px 5px 5px 0px;
  }
  .black-rectangle2 {
    position: absolute;
    width: 80px;
    height: 475px;
    right: 600px;
    top: 100px;
    background: #000000;
    border-radius: 5px 0px 0px 5px;
  }
  .weddings {
    font-family: "Banny";
    position: absolute;
    width: 475px;
    height: 80px;
    left: 367px;
    top: 271px;
    font-size: 24px;
    line-height: 12px;
    align-items: center;
    text-indent: 20px;
    text-transform: uppercase;
    color: #ffffff;
    transform: rotate(90deg);
  }
  .corporate {
    font-family: "Banny";
    position: absolute;
    width: 475px;
    height: 80px;
    left: 597px;
    top: 270px;
    font-size: 24px;
    line-height: 12px;
    align-items: center;
    text-indent: 20px;
    text-transform: uppercase;
    color: #ffffff;
    transform: rotate(-90deg);
  }
  .mazzo {
    top: 675px;
    position: relative;
  }
  .modern-restaurant {
    top: 675px;
    position: relative;
  }
  .cafe {
    top: 675px;
    position: relative;
  }
  .classic-restaurant {
    top: 675px;
    position: relative;
  }
}
</style>
