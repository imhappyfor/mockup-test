<template>
  <div>
    <img id="background" src="../assets/bg.png" alt="background image" />
    <div id="text-container">
    <p class="head"> {{headerText}} </p>
    <p class="body"> {{bodyText}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Body",
  data() {
      return {
          headerText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          bodyText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

      }
  }
};
</script>

<style scoped>
#background {
  width: 100%;
  height: 704px;
  
  /* z-index: -1; */
}
#text-container {
  position: absolute;
  top: 10%;
  left: 4%;
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
</style>