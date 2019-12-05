<template>
  <div class="header">
    <div class="header-flex">
      <div class="headerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      <div class="clock">
        <div style="display: flex; flex-direction: row; height: 50px; padding-left: 8px;">
          <div
            v-for="(increment,index) in increments"
            :key="increment"
            style="padding-left: 10px;display: flex; flex-direction: column; justify-content: center; align-items:center"
          >
            <!-- <div v-for="(increment,index) in increments" :key="increment" style="padding-left: 10px" > -->
            <div class="numbers" style="display: flex; flex-direction: column;">
              <p>{{clock[index]}}</p>
            </div>
            <div>{{increment}}</div>
          </div>
        </div>
      </div>
      <!-- FIX THIS BEFORE SENDING -->
      <div @click="headerClose" id="close">
        <img src="../assets/White Close.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clockBanner",
  data() {
    return {
      clock: ["00", "00", "00", "00"],
      increments: ["days", "hours", "minutes", "seconds"]
    };
  },
  methods: {
    headerClose() {
      alert("you have cliked the button to close the header");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 50px;
  background-color: #1f3162;
  line-height: 31px;
}

.headerText {
  word-wrap: break-word;
  display: table-cell;
  height: 31px;
  width: 436px;
  color: rgba(255, 255, 255, 0.72);
  font-family: "Poppins";
  font-weight: 300;
  font-size: 16px;
  line-height: 31px;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 250px;
  margin: 0;
  text-align: center;
}

.header-flex {
  display: flex;
  flex-direction: row;
}

.clock {
  color: rgba(255, 255, 255, 0.72);
}

.clock-items > div {
  padding-inline-start: 20px;
  color: rgba(255, 255, 255, 0.72);
  font-family: Poppins;
  font-size: 12px;
  // line-height: 21px;
}
.increments {
  font-size: 12px;
  // padding-left: 11px;
  font-weight: 400;
  line-height: 21px;
  width: 34px;
  letter-spacing: 1px;
  // text-align: center;
  color: rgba(255, 255, 255, 0.72);
}
.numbers {
  // height: 31px;
  // padding-top: 9px;
  // width: 23px;
  height: 16px;
  // padding-left: 8px;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1.7px;
  font-family: "Poppins";
}
#close {
  // background-color: rgb(214, 5, 5);
  display: flex;
  margin-left: auto;
  align-content: center;
  justify-items: center;
  padding-right: 10px;
  padding-bottom: 2px;
  cursor: pointer;
}
#close:hover {
  opacity: 0.5;
}
</style>