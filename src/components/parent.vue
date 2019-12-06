<template>
<div>
    <transition name="slide-fade">
        <clockBanner v-if="BannerOpen"  @BannerOpen="destroyBanner"> </clockBanner>
    </transition>
    <NavigationBar></NavigationBar>
    <Body style="position: relative"> </Body>
    <products> </products>
    <Footer> </Footer>
</div>
</template>

<script>
import Footer from '@/components/Footer'
import clockBanner from '@/components/clockBanner'
import NavigationBar from '@/components/NavigationBar'
import products from '@/components/products'
import Body from '@/components/Body'

export default {
name: 'test',
components : {clockBanner, Body, NavigationBar,Footer,products},
data() {
    return {
        BannerOpen: true,
        cart : []
    }
},
methods: {
    destroyBanner(val){
        this.BannerOpen = val;
    }
},
created(){

}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');

.slide-fade-enter-active {
  /* transition: all .3s ease; */
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100px);
  /* opacity: 0; */
}



</style>