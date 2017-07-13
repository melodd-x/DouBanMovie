<template>
<div class="rating">
      <span v-for="n in 5" class="rating-star" :class="{'rating-star-small-full':n<=rate?true:false}"
      @mouseover="rate=n" @click="sentvalue()"></span>
</div>
</template>

<script>
import Vratingstar from "./Vratingstar.vue"
export default {
  name: 'Vratingstar',
  props: {
    // value2:Number
  },
  data() {
    return {
      rate:0,
    }
  },
  methods:{
    sentvalue:function(){
      this.$emit("lessonchild",this.rate)
    }
  },
  components: {
    Vratingstar
  }
}
</script>

<style scoped>
  .rating{
    padding: 40px 0;
    text-align: center;
    position: relative;
  }
  .rating .rating-star{
    height: 0;
width: 12%;
padding-top: 12%;
display: inline-block;
background-repeat: no-repeat;
background-size: 100%;
-webkit-tap-highlight-color: transparent;
background-image: url("../assets/starempty.png");
margin: 0 6px;
  }
  .rating .rating-star-small-full{
    background-image: url("../assets/starfull.png");
  }
</style>
