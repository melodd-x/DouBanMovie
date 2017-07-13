<template>
<div id="app">
  <transition>
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
import "normalize.css/normalize.css"
export default {
  name: 'app',
  data () {
    return {
    }
  },

}




</script>

<style>
*{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
body {
  margin: 0;
  color: #111;
  font-size: 12px;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
}
a{
  text-decoration: none;
  color: #42bd56;
}
h1{
  line-height: 32px;
}
ul{
  margin: 0;
padding: 0;
}
li{
  list-style: none;
}
.cleanfix{
  content: '';
clear: both;
display: block;
}
</style>
