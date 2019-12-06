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
        <div class="triangle" style="margin-right: auto;"></div>
      </div>
    </div>
    <div v-if="cartOpen" class="cart-style">
      <div v-for="(product,index) in currentCart" :key="index">
  
      <div style="display: flex; flex-direction: row; ">
          <div><img :src="returnImage(product.id)" alt="" class="img-sytle"></div>
          <div style="display: flex; flex-direction: column">
          <p class="cart-item-header">{{currentCart[0]['name']}}</p>
        <div style="display: flex; flex-direction: row">
            <div :style="'height: 32px; width: 32px;; border-radius: 5px; margin-right: 12px;background-color:' + productColors[0]"></div>
              <div :style="'height: 32px; width: 32px;; border-radius: 5px; margin-right: 12px;background-color:' + productColors[1]"></div>
              <div :style="'height: 32px; width: 32px;; border-radius: 5px; margin-right: 12px;background-color:' + productColors[2]"></div>
          </div>
        <div @click="removeItem()">
                  <p style="text-decoration: underline">Remove</p>
              </div>
          </div>
          
      </div>
      <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",

  data() {
    return {
      cartOpen: false,
      currentCart: null,
      productColors : ["#143061", "#81396F", "#F6437D"],
    };
  },
  methods: {
    toggleCart() {
      this.cartOpen = !this.cartOpen;
      this.currentCart = JSON.parse(localStorage.getItem("local-cart"));
    },
    storageListenerMethod() {},
    returnImage(productID){
      let url = ''
      switch(productID){
      case 1:
      url = require("../assets/alex-holyoake-ns-zrk_O-z4-unsplash.jpg");
      break;
      case 2: 
      url= require("../assets/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg");
      break;
      case 3: 
      url= require("../assets/kui-ye-chen-NuOGFo4PudE-unsplash.jpg");
      break;
      case 4:
      url = require("../assets/galina-n-miziNqvJx5M-unsplash.jpg");
      break;
    }
    return url
    },
    removeItem(){

    }

  },
  created() {
    this.currentCart = JSON.parse(localStorage.getItem("local-cart"));
  }
};
</script>

<style>
.img-sytle {
  height: 92px;
  width: 95px;
}
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
  min-height: 299px;
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
  /* margin-left: 120.5px; */
  margin-top: 23.5px;
}
#first-item {
  height: 41px;
  width: 159px;
  color: #000000;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 41px;
}
</style>
