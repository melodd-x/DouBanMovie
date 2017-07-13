<template>
<div>
<template v-if="wantsee==0">
  <section class="subject-mark">
    <div class="mark-item">
      <a href="javascript:void(0)" @click="changepage1()">
        <span>想看</span>
      </a>
      <a href="javascript:void(0)" @click="changepage2()">
        <span>看过</span>
      </a>
    </div>
  </section>
</template>
<template v-if="wantsee==1">
  <section class="subject-mark">
    <div class="mark-item">
      <a href="javascript:void(0)" class="disable">
        <span>已想看</span>
      </a>
      <a href="javascript:void(0)" @click="changepage2()">
        <span>看过</span>
      </a>
    </div>
  </section>
</template>
<template v-if="wantsee==2">
  <section class="subject-mark">
    <div class="mark-item">
      <a href="javascript:void(0)" @click="changepage1()">
        <span>想看</span>
      </a>
      <a href="javascript:void(0)" class="disable">
        <span>已看过</span>
      </a>
    </div>
  </section>
</template>
</div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'VuserMovie',
  props: {
    wantsee:Number
  },
  data() {
    return {
    }
  },
  methods:{
    changepage1:function(){

      var nameu="";
      var arr=document.cookie.split(";");
      for(var i=0;i<arr.length;i++){
             var name=arr[i].split("=")[0];
             var value=arr[i].split("=")[1];
             if(name==" username"){
                nameu= value;
             }

      }
      // console.log(nameu)
      if(nameu.length!=0){
        this.$store.commit("changewantsee", 1);
      }
      else{
        window.location.href="http://localhost:8080/#/login"
      }
    },
    changepage2:function(){
      var nameu="";
      var arr=document.cookie.split(";");
      for(var i=0;i<arr.length;i++){
             var name=arr[i].split("=")[0];
             var value=arr[i].split("=")[1];
             if(name==" username"){
                nameu= value;
             }

      }
      if(nameu.length!=0){
        this.$store.commit("changewantsee", 2);
      }
      else{
        window.location.href="http://localhost:8080/#/login"
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
section {
padding-top: 0px;
}

.subject-mark .mark-item {
  margin-bottom: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.subject-mark .mark-item a {
    height: 30px;
    line-height: 30px;
    display: block;
    border: 1px solid #ffb712;
    border-radius: 3px;
    margin-right: 10px;
    color: #ffb712;
    font-size: 15px;
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1;
}
.subject-mark .mark-item a.disable{
  color: #aaa;
border: 1px solid #aaa;
}
</style>
