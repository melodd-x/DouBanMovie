<template>
<section class="subject-intro">
  <h2>{{vtitle}}的剧情简介</h2>
  <p>{{vcontent}}</p>
</section>
</template>

<script>
export default {
  name: 'Vmovieintrodust',
  props: {
    vtitle:String,
    vcontent:String,
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
.subject-intro{
  margin-bottom: 30px;
}
h2{
  color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
        font-weight: normal;
}
section p{
  font-size: 15px;
color: #494949;
line-height: 22px;
word-wrap: break-word;
margin: 0;
padding: 0;
}


</style>
