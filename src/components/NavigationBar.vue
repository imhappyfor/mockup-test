<template>
  <div class="nav">
    <a id="first-item">Lorem Ipsum</a>
    <a class="nav-bar-item" href>LOREM</a>
    <a class="nav-bar-item" href>IPSUM</a>
    <a class="nav-bar-item" href>EXCEPTEUR</a>
    <a class="nav-bar-item" href>CONSECTETUR</a>
    <a class="nav-bar-item" href>VENIAM</a>
    <img src="../assets/Cart Icon.svg" alt />
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {};
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

</style>
