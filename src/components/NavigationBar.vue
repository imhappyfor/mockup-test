<template>
  <div>
    <div class="nav" style="display: absolute;">
      <a id="first-item">Lorem Ipsum</a>
      <a class="nav-bar-item" href>LOREM</a>
      <a class="nav-bar-item" href>IPSUM</a>
      <a class="nav-bar-item" href>EXCEPTEUR</a>
      <a class="nav-bar-item" href>CONSECTETUR</a>
      <a class="nav-bar-item" href>VENIAM</a>
      <div @click="toggleCart()">
        <img src="../assets/Cart Icon.svg" />
        <div class="triangle" style="margin-right: auto;" ></div>
      </div>
    </div>
    <div v-if="cartOpen" class="cart-style">
      <p class="cart-item-header">test</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",

  data() {
    return {
      cartOpen: false
    };
  },
  methods: {
    toggleCart() {
      this.cartOpen = !this.cartOpen;
    }
  }
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 66px;
  align-items: center;
  background-color: #ffffff;
}

.nav-bar-item {
  height: 31px;
  width: 62px;
  color: #000000;
  font-family: Poppins;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 3px;
  line-height: 31px;
  text-decoration: none;
  text-align: center;
}
.triangle {
  height: 6px;
  width: 8px;
  /* transform: scaleY(-1); */
  background-color: #a0a2a6;
}
.cart-style {
  position: absolute;
  height: 299px;
  right: 5%;
  width: 317px;
  border: 1px solid #e6e6e7;
  border-radius: 0 0 10px 10px;
  background-color: white;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.19);
  z-index: 10;
}
.cart-item-header {
  height: 33px;
  width: 165px;
  color: #000000;
  font-family: Poppins;
  font-size: 23px;
  font-weight: 600;
  line-height: 33px;
  margin-left: 120.5px;
  margin-top: 23.5px;
}
</style>
