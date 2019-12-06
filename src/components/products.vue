<template>
<!-- main div to position the products below the header images -->
  <div style="position: relative; top: 185px">
      <!-- flex container to display the products evenly accross the screen -->
<div style="display: flex; flex-direction: row; justify-content: space-evenly; position: relative;" >
    <!-- v-for to iterate over the available products in the data set -->
    <div v-for="product in products" :key="product['item-id']">
      <div class="rectangle" >
        <img :src="product.url" alt height="222px" width="301px" />
        <div class="information">
            <p class="item-name">
                {{product['item-name']}}
            </p>
            <p class="item-description">
                {{product['item-description']}}
            </p> 
            <!-- wrapper div for only the color flex items -->
            <div>
                <div class="colors" style="display: flex; margin-left: 27.5px ">
                    <div :style="'height: 32px; width: 32px;; border-radius: 5px; margin-right: 12px;background-color:' + product['item-available-colors'][0]">
                        <button 
                            style="width: 32px ; height:32px; border: none; background-color: rgba(0,0,0,0)"
                            @click="itemInformation(product['item-id'],product['item-name'],0)">
                        </button>
                    </div>
                    <div :style="'height: 32px; width: 32px;; border-radius: 5px; margin-right: 12px;background-color:' + product['item-available-colors'][1]">
                        <button 
                        style="width: 32px ; height:32px; border: none; background-color: rgba(0,0,0,0)"
                        @click="itemInformation(product['item-id'],product['item-name'],1)"
                        ></button>
                    </div>
                    <div :style="'height: 32px; width: 32px;; border-radius: 5px; margin-right: 12px;background-color:' + product['item-available-colors'][2]">
                        <button style="width: 32px ; height:32px; border: none; background-color: rgba(0,0,0,0)"
                        @click="itemInformation(product['item-id'],product['item-name'],2)"
                        ></button>
                    </div>
                    
                </div>
            </div>

        </div>
        
        <button class="rectangle-button " >
          <p class="button-text">Add to cart </p>
          
        </button>
        
      </div>
    </div>
</div>



  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
        productColors : ["#143061", "#81396F", "#F6437D"],
        selectedItem: '',
        products: [
            {
            url: require("../assets/alex-holyoake-ns-zrk_O-z4-unsplash.jpg"),
            "item-name": "Lorem ipsum 1",
            "item-id" : 1,
            "item-description":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "item-available-colors": ["#143061", "#81396F", "#F6437D"]
            },
            {
            url: require("../assets/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg"),
            "item-name": "Lorem ipsum 2",
            "item-id" : 2,
            "item-description":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "item-available-colors": ["#143061", "#81396F", "#F6437D"]
            },
            {
            url: require("../assets/kui-ye-chen-NuOGFo4PudE-unsplash.jpg"),
            "item-name": "Lorem ipsum 3",
            "item-id" : 3,
            "item-description":
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "item-available-colors": ["#143061", "#81396F", "#F6437D"]
            },
            {
            url: require("../assets/galina-n-miziNqvJx5M-unsplash.jpg"),
            "item-name": "Lorem ipsum 4",
            "item-id" : 4,
            "item-description":
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "item-available-colors": ["#143061", "#81396F", "#F6437D"]
            }
        ]
    };
  },
  methods:{
      itemInformation(id,name,colorIndex){
        let color = this.productColors[colorIndex]
        this.$store.commit('add_cart_to_local',{id,name,color})
      },
  }
};
</script>

<style>
.rectangle {
  box-sizing: border-box;
  max-height: 567px;
  max-width: 302px;
  border: 1px solid #ececec;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
}
.rectangle-button {
  margin-top: 74px;
  height: 69px;
  width: 100%;
  border-radius: 0 0 12px 12px;
  color: white;
  background-color: #000000;
  
}
.button-text {
  height: 16px;
  width: 123px;
  color: #ffffff;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  line-height: 16px;
  border-radius: 0 0 12px 12px;
}
.item-name { 
    padding-top: 22px;
	height: 33px;
	width: 172px;
	color: #000000;
	font-family: Poppins;
	font-size: 23px;
	font-weight: 600;
	line-height: 33px;
}

.item-description {
    padding-top: 7px;
	height: 56px;
	width: 255px;
	color: #000000;
	font-family: "Open Sans";
	font-size: 16px;
	line-height: 24px;
}
.colors {
    padding-top: 59px;
}
</style>