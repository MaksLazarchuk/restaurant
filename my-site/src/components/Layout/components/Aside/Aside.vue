<template>
  <div>
    <aside class="form" id="contact">
      <div class="container">
        <a href="#" class="contact">CONTACT</a>
        <div class="line" />
        <a href="#" class="text-form">{{ textForm }}</a>
        <form class="zip-code">
          <input
            class="input-form name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            class="input-form email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            class="input-form phone"
            type="tel"
            placeholder="Phone"
            required
          />
          <input
            class="message"
            type="message"
            placeholder="Message"
            required
          />
          <button class="send-message" type="submit">SEND MESSAGE</button>
        </form>
        <img class="address" src="@/assets/images/number.svg" alt="" />
      </div>
    </aside>
  </div>
</template>

<script>
import { textForm } from "../../../../__mocks__";

export default {
  name: "Aside",
  data() {
    return {
      textForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  .container {
    height: 647px;
    position: relative;
    background: white;
  }
  .contact {
    font-family: "Banny";
    position: absolute;
    width: 1279px;
    height: 56px;
    left: 80px;
    top: 100px;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    border-radius: 5px;
    text-decoration: none;
  }
  .line {
    position: absolute;
    width: 60.91px;
    height: 5px;
    left: 690px;
    top: 156px;
    background: #e8c300;
    border-radius: 5px;
  }
  .text-form {
    position: absolute;
    width: 565px;
    height: 76px;
    left: 438px;
    top: 161px;
    font-family: "Open Sans Bold";
    font-size: 18px;
    line-height: 28px;
    align-items: center;
    text-align: center;
    color: #000000;
    text-decoration: none;
    margin-top: 20px;
  }
  .zip-code {
    height: 270px;
    width: 1290px;
    padding-top: 287px;
    flex-wrap: wrap;
    margin-left: 70px;
  }
  .input-form {
    position: relative;
    background: #e5e5e5;
    border-radius: 5px;
    height: 60px;
    width: 420px;
    border: #e5e5e5;
    margin-bottom: 10px;
    margin-left: 10px;
    font-family: "Open Sans Regular";
    font-size: 14px;
    line-height: 19px;
    align-items: center;
    text-indent: 20px;
  }
  .message {
    position: relative;
    background: #e5e5e5;
    border-radius: 5px;
    height: 120px;
    width: 1276px;
    border: #e5e5e5;
    margin-left: 10px;
    font-family: "Open Sans Regular";
    font-size: 14px;
    line-height: 19px;
    align-items: center;
    text-indent: 20px;
  }
  .name {
    width: 416px;
  }
  .email {
    width: 416px;
  }
  .phone {
    width: 416px;
  }
  .send-message {
    position: relative;
    width: 640px;
    height: 60px;
    background: #e8c300;
    border-radius: 5px;
    border: #e8c300;
    font-family: "Open Sans Bold";
    font-size: 12px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    color: #ffffff;
    margin-left: 650px;
    margin-top: 10px;
  }
  ::placeholder {
    color: rgba(51, 51, 51, 0.5);
  }
  .address {
    position: absolute;
    width: 640px;
    height: 60px;
    left: 65px;
    top: 487px;
  }
}
</style>
