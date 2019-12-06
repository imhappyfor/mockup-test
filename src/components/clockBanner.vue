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
              <p v-if="index == 0">{{days}}</p>
              <p v-if="index == 1">{{hours}}</p>
              <p v-if="index == 2">{{minutes}}</p>
              <p v-if="index == 3">{{seconds}}</p>
              
              
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
      clock: [],
      increments: ["days", "hours", "minutes", "seconds"],
      starttime:"Dec 5, 2019 15:37:25" ,
      endtime:"Dec 9, 2019 16:37:25",
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
      statusType:"",
      statusText: "",
    };
  },
  methods: {
    headerClose() {
      this.$emit('BannerOpen', false)
    },
    timerCount(start,end){
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = start - now;
        var passTime =  end - now;

        if(distance < 0 && passTime < 0){
            clearInterval(this.interval);
            return;

        }else if(distance < 0 && passTime > 0){
            this.calcTime(passTime);


        } else if( distance > 0 && passTime > 0 ){
            this.calcTime(distance); 

        }
    },
    calcTime(dist){
      // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
        // this.clock.push( this.days,this.hours,this.minutes,this.seconds)

    }
  },
  mounted(){
       this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    console.log(this.start,this.end)
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
        console.log('test')
    }, 1000);
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
  padding-right: 31px;
  padding-top: 19px;
  width: 12px;
  height: 12px;
  cursor: pointer;
}
#close:hover {
  opacity: 0.5;
}
</style>