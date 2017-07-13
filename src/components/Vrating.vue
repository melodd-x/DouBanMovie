<template>
<div class="rating">
  <template v-if="rate!=0">
    <span class="rating-stars">
      <span v-for="n in 5" class="rating-star" :class="{'rating-star-small-full':n<=rate?true:false,'rating-star-half-full':parseInt(rate)!=rate&&n==(rate+0.5)&&allowHalf==true?true:false     }"></span>
    </span>
    <span class="strong">{{ratingData.average}}</span>
    <span v-if="ratingcontents!=0">{{ratingcontents}}人评价</span>
    </template>
    <template v-if="rate==0">
          <span>暂无评分</span>
    </template>
</div>
</template>

<script>
export default {
  name: 'Vrating',
  data() {
    return {
      rate: 0
    }
  },
  props: {
    ratingData: Object,
    ratingcontents:Number,
    allowHalf:Boolean,
    
  },
  mounted:
  // this.halfallow=this.allowHalf
    function(){
      var num =this.ratingData.stars;
      if(num<=0){this.rate=0}
      else if(num==5){this.rate=0.5}
      else if(num==10){this.rate=1}
      else if(num==15){this.rate=1.5}
      else if(num==20){this.rate=2}
      else if(num==25){this.rate=2.5}
      else if(num==30){this.rate=3}
      else if(num==35){this.rate=3.5}
      else if(num==40){this.rate=4}
      else if(num==45){this.rate=4.5}
      else{this.rate=5}

    }
  ,
  components: {

  }
}
</script>

<style scoped>

</style>
