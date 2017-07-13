<template>
  <section>
    <template v-if="type==true">
    <h2>我{{title}}这个电影</h2>
    <div class="rating">
        <span class="rating-stars">
          <span v-for="n in 5" class="rating-star" :class="{'rating-star-small-full':n<=$store.state.star/10?true:false}"></span>
          <span>{{$store.state.star/10}}.0</span>
        </span>
    </div>
    <div class="bd">
      <div class="self-comment">
        (<a href="javascript:void(0)" class="update-btn" @click="getupdate()">修改</a>&nbsp;&nbsp;<a href="javascript:void(0)" class="delete-btn" @click="deletedata()">删除</a>)
      </div>
    </div>
    </template>
  </section>
</template>

<script>
import Vrating from "./Vrating.vue"
export default {
  name: 'Vsubjectmark',
  props: {
    movieIdData:Object,
    wantsee:Number,
  },
  data() {
    return {
      title:'',
      type:false,
    }
  },
  methods:{
    getupdate:function(){
      if(this.wantsee==1){
        this.$store.commit("changewantsee", 1);
      }
      else if(this.wantsee==2){
        this.$store.commit("changewantsee", 2);
      }
    },
    deletedata:function(){

    }
  },
  mounted:function(){
    var $this = this;
    if(this.wantsee==1){
      this.title="想看";
      this.type=true;
    }
    else if(this.wantsee==2){
      this.title="已看过";
      this.type=true;
    }
    else{

    }
  },
  components:{
    Vrating
  }
}
</script>

<style scoped>
section{
  margin-bottom: 30px;
}
h2 {
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
}
h1, h2, h3 {
    font-weight: normal;
}
.rating-stars {
    display: inline-block;
    vertical-align: middle;
}
.rating-stars .rating-star{
  display: inline-block;
margin-right: 1px;
background-color: transparent;
background-repeat: no-repeat;
background-image: url("../assets/emptystar.png");
width: 13px;
height: 13px;
background-size: 13px 13px;
}
.rating-stars .rating-star-small-full{
  background-image: url("../assets/fullstar.png");
}
.bd {
    margin-top: 10px;
    font-size: 15px;
    color: #494949;
}



</style>
