<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/douban-app-logo.png" width="48">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>我们的精神部落</div>
      </div>
    </div>
    <a :href="downloadip">{{device}}</a>
  </div>
</template>

<script>

export default {
  name: 'Vfoot',
  props:{
    device:String,
    downloadip:String
  },
  data () {
    return {
    }
  },
  components:{

  }
}
</script>

<style scoped>
.download-app {
    padding: 0 0 20px 0;
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 15px;
}
.download-app .info {
    margin: 0 auto 15px;
    overflow: hidden;
    text-align: left;
    font-size: 14px;
    display: inline-block;
    color: #111;
}
.download-app .info img {
    float: left;
    margin-right: 12px;
}
.download-app .info-content {
    overflow: hidden;
}
.download-app .info strong {
    font-size: 24px;
    font-weight: normal;
    line-height: 28px;
}
.download-app .info .info-content div {
    white-space: pre;
    line-height: 20px;
}
.download-app .info+a {
    display: block;
}







</style>
