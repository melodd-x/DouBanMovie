<template>
<div>
  <Vmenu></Vmenu>
  <div class="page">
    <Vmovielist :url="url1" v-bind:listtitle="title1"></Vmovielist>
    <Vmovielist :url="url2" v-bind:listtitle="title2"></Vmovielist>
    <Vmovielist :url="url3" v-bind:listtitle="title3"></Vmovielist>
    <Vinterests v-bind:listtitle="title4"></Vinterests>
    <Vtypes v-bind:listtitle="title5"></Vtypes>
    <Vfoot :device="yourdevice" :downloadip="downloadip"></Vfoot>
  </div>





</div>
</template>

<script>

import Vmenu from "./Vmenu.vue"
import Vmovielist from "./Vmovielist.vue"
import Vinterests from "./Vinterests.vue"
import Vtypes from "./Vtypes.vue"
import Vfoot from "./Vfoot.vue"
export default {
  name: 'Vmoviemain',
  data() {
    return {
      url1:"http://api.douban.com/v2/movie/in_theaters",
      url2:"http://api.douban.com/v2/movie/coming_soon",
      url3:"http://api.douban.com/v2/movie/top250",
      title1:"影院热映",
      title2:'新片速递',
      title3:"TOP250榜单",
      title4:'发现好电影',
      title5:'分类浏览',
      yourdevice:"",
      downloadip:""
    }
  },


  beforeMount: function() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    if (bIsIpad) {
      // alert("Ipad");
      this.yourdevice="去 App Store 免费下载 iOS 客户端";
      this.downloadip="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1"
    }
    else if(bIsIphoneOs){
      // alert("Iphone");
      this.yourdevice="去 App Store 免费下载 iOS 客户端";
      this.downloadip="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1"

    }
    else if(bIsAndroid){
      // alert("安卓");
      this.yourdevice="免费下载 Android 客户端";
      this.downloadip="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1"

    }
     else {
      this.yourdevice="";
      this.downloadip="";
    }

  },


  components: {
    Vmenu,
    Vmovielist,
    Vinterests,
    Vtypes,
    Vfoot
  }
}
</script>

<style>
.page {
  padding-top: 47px;
  max-width: 650px;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
}

section {
  margin: 0;
  overflow: hidden;
  background-color: #fff;
}

section:first-child {
  padding-top: 10px;
}

section header {
  padding: 0 1.12rem;
}

section header h2 {
  display: inline-block;
  min-width: 4em;
  font-size: 18px;
  color: #111;
  padding-left: 0;
  padding-bottom: 0;
  font-size: 1.06rem;
  margin: 0;
  font-weight: normal;
  line-height: 24px;
}

section header a {
  float: right;
  font-size: .9rem;
  line-height: 1.5rem;
}

section .content-section {
  margin-bottom: -1.12rem;
}

section .content-section ul {
  border-bottom: 1px solid #F2F2F2;
  padding: 15px 0 43px 0;
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
}

section.movielist .content-section ul li {
  width: 100px;
}
section .content-section ul li {
  margin-left: 0.48rem;
  display: inline-block;
  vertical-align: top;
  text-align: center;
}


section .content-section ul li:first-child {
  margin-left: 1.12rem;
}

li>* {
  font-size: .94rem;
  white-space: normal;
}

section .content-section ul li a {
  color: #111;
}

section .content-section ul li a .item-poster {
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

section .content-section ul li a .item-poster::before {
  content: "";
  float: left;
  margin-top: 142.85714%;
}

section .content-section ul li a .item-title {
  display: block;
  margin-top: .6rem;
  line-height: .94rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

section .content-section ul li a .item-rating {
  color: #aaa;
  line-height: .94rem;
  margin-top: .3rem;
  font-size: .72rem;
}

section .content-section ul li a .item-rating .rating-stars {
  display: inline-block;
  vertical-align: middle;

}
section .content-section ul li a .item-rating .rating-stars .rating-star{
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
  background-image: url("../assets/emptystar.png");
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;

}
section .content-section ul li a .item-rating .rating-stars .rating-star-small-full {
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
  background-image: url("../assets/fullstar.png");
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;
}
</style>
