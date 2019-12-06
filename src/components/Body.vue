<template>
  <div id="container">
    <div id="background">
      <img src="../assets/bg.png" alt="background image" />
    </div>
    <div id="man-on-building">
      <img src="../assets/Top guy.png" alt="background image" />
    </div>
    <div id="text-container">
      <p class="head">{{headerText}}</p>
      <p class="body">{{bodyText}}</p>
      <button @click="buttonMethod" id="test-button">Lorem</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Body",
  data() {
    return {
      headerText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    buttonMethod(){
      alert('you have pressed the button')
    }
  }
};
</script>

<style scoped>
#background {
  position: absolute;
}
#background > img {
  height: 704px;
  width: 100%;
}
#man-on-building {
  position: absolute;
  top: 15%;
  left: 50%;
}
#man-on-building > img {
  height: 638.02px;
  width: 602px;
  border-radius: 23px;
  padding-right: 80px;
}
#text-container {
  position: relative;
  padding-top: 3%;
  /* top: 50%; */
  left: 14%;
}
.body {
  padding-top: 20px;
  height: 93px;
  width: 603px;
  color: white;
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 31px;
}
.head {
  height: 356px;
  width: 603px;
  color: #ffffff;
  font-family: Poppins;
  font-size: 83px;
  font-weight: 600;
  line-height: 89px;
}
.shadow {
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 2px 0 #000;
}
#container {
  position: absolute;
  width: 100%;
}
#test-button {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
  outline: none;
  cursor: pointer;
  border-style: none;
  position: relative;
  padding-top: 58px;
  height: 48px;
  width: 255px;
   margin: 0 auto;
    padding: 0;
    border-radius: 24px;
    display: inline-block;
    line-height: 50px;
    text-align: center;
  background-color: #000000;
  color: white;
}
</style>