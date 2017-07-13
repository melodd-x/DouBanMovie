<template>
<section class="tags">
  <p>查看更多豆瓣高分电影电视剧</p>
  <ul>
    <li  v-for="n in vtags.length">
      <a href="#">{{vtags[n-1]}}</a>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: 'Vtags',
  props: {
    vtags:Array
  },
  data() {
    return {

    }
  },

  components: {

  }
}
</script>

<style scoped>
.tags {
  margin: 30px 0;
}

.tags p {
  color: #aaa;
  font-size: 15px;
  line-height: 22px;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
}
.tags ul{
      font-size: 0;
      list-style: none;
margin: 0;
padding: 0;
}
.tags ul li{
  display: inline-block;
margin: 10px 10px 0 0;
font-size: 15px;
}
.tags ul li a{
  font-size: 15px;
line-height: 28px;
padding: 0 12px;
border-radius: 28px;
text-align: center;
color: #494949;
background: #f5f5f5;
display: block;
margin: 0;
}




</style>
