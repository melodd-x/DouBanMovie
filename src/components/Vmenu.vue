<template>
<div class="headernav" :class="{height100:hidden}">
  <div class="headernav-primary" :class="{isActive:active,isHidden:hidden}">
    <router-link to="/">
      <h1>豆瓣</h1>
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/" style="color: #2384E8;">电影</router-link>
        </li>
        <li>
          <router-link to="/books" style="color: #9F7860;">图书</router-link>
        </li>
        <li>
          <router-link to="/radio" style="color: #E4A813;">广播</router-link>
        </li>
        <li>
          <router-link to="/group" style="color: #2AB8CC;">小组</router-link>
        </li>
      </ul>
      <span @click="closepageone"></span>
    </nav>
  </div>
  <div class="headernav-second" :class="{isHidden:active,isActive:hidden}">
    <div class="headernav-secondary">
      <a class="close-nav" @click="closepageone">关闭</a>
      <form action="/search" method="get">
        <input type="search">
      </form>
      <ul>
        <li>
          <div>
            <router-link to="/">
              <strong style="color: rgb(35, 132, 232);">电影</strong>
              <span>影院热映</span>
            </router-link>
            <router-link to="https://douban.com/location">
              <strong style="color: rgb(230, 70, 126);">同城</strong></strong>
              <span>周末活动</span>
            </router-link>
            <a href="https://read.douban.com">
              <strong style="color: rgb(159, 120, 96);">阅读</strong>
              <span>电子书</span>
            </a>
            <a href="https://dongxi.douban.com/?dcs=mobile-anonymous-home&dcm=douban">
              <strong style="color: rgb(225, 100, 77);">东西</strong>
              <span>心爱之物</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/tv">
              <strong style="color: rgb(122, 106, 219);">电视</strong>
              <span>正在热播</span>
            </router-link>
            <router-link to="/group">
              <strong style="color: rgb(42, 184, 204);">小组</strong></strong>
              <span>志趣相投</span>
            </router-link>
            <router-link to="/game">
              <strong style="color: rgb(87, 116, 197);">游戏</strong>
              <span>虚拟世界</span>
            </router-link>
            <a href="https://douban.fm">
              <strong style="color: rgb(64, 207, 169);">FM</strong>
              <span>红心歌单</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/book">
              <strong style="color: rgb(159, 120, 96);">图书</strong>
              <span>畅销排行</span>
            </router-link>
            <router-link to="/music">
              <strong style="color: rgb(244, 143, 46);">音乐</strong></strong>
              <span>新碟榜</span>
            </router-link>
            <router-link to="/mobileapp">
              <strong style="color: rgb(89, 108, 221);">应用</strong>
              <span>玩手机</span>
            </router-link>
            <a href="https://market.douban.com/?utm_campaign=mobile_web_douban_nav&utm_source=douban&utm_medium=mobile_web">
              <strong style="color: rgb(66, 189, 86);">市集</strong>
              <span>购买原创</span>
            </a>
          </div>
        </li>
      </ul>
      <div class="navBottom">
        <div class="navitem">
          <div id="username">
            <router-link to="/register">{{loginnickname}}</router-link>
          </div>
          <div id="quitlogin" @click="getlogin()">
            <router-link :to="loginurl">{{loginmsg}}</router-link>
          </div>

        </div>
        <div class="navitem">
          <a href="#">使用桌面版</a>
          <a href="#">使用豆瓣App</a>
        </div>
      </div>
    </div>
    <div class="cleanfix">

    </div>
  </div>
  <div class="layer">

  </div>
</div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'Vmenu',
  data() {
    return {
      // isHidden:isHidden,
      // isActive:isActive
      active: true,
      hidden: false,
      loginnickname: '注册账号',
      loginmsg: '登录豆瓣',
      loginurl: ''
    }
  },
  methods: {
    closepageone() {
      this.active = !this.active;
      this.hidden = !this.hidden;
      if (this.hidden == true) {
        document.getElementById("body").style.overflow = "hidden";
      } else {
        document.getElementById("body").style.overflow = "auto";
      }
    },
    getlogin() {
      if ($("#quitlogin")[0].innerText == "登录豆瓣") {
        function abc() {
          var arr = document.cookie.split("; ");
          for (var i = 0; i < arr.length; i++) {
            var name = arr[i].split("=")[0];
            var value = arr[i].split("=")[1];
            if (name == "usernickname") {
              return false;
            }
          };
          return true;
        }
        if (abc()) {
          document.cookie = "userid=" + "";
          document.cookie = "username=" + "";
          document.cookie = "userpassword=" + "";
          document.cookie = "usernickname=" + "";
          window.location.href = "http://localhost:8080/#/login";
        }
      }
      // window.location=function(){return false};
      // this.loginurl=function(){return false}
      // console.log("123");
      else if ($("#quitlogin")[0].innerText == "退出豆瓣") {
        document.cookie = "userid=" + "";
        document.cookie = "username=" + "";
        document.cookie = "userpassword=" + "";
        document.cookie = "usernickname=" + "";
        window.location.href = "http://localhost:8080/#/login";
      } else {
        // event.
      }
    }
  },
  mounted: function() {
    var arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
      var name = arr[i].split("=")[0];
      var value = arr[i].split("=")[1];
      if (name == "usernickname") {
        if (value != "") {
          this.loginnickname = value;
          this.loginmsg = "退出豆瓣"

        } else {
          this.loginurl = "/login";
        }

      }
    };
    //  if($("#quitlogin")[0].innerText=="退出豆瓣"){
    //    this.loginurl="/login";
    //  }
    //  else{
    //    // event.
    //  }

    // console.log(getusername)
    // if(getusername()!=""){
    //   $("#username").text()=getusername();
    //   $("#quitlogin").text("退出登陆")=;
    // }
  },
  computed: {

  }

}
</script>

<style scoped>
.height100 {
  height: 100%;
}

.headernav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background: #fff;
}

.headernav .headernav-primary {
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  border-bottom: 1px solid #f3f3f3;
  padding: 0 18px;
  background: #fff;
  height: 47px;
  box-sizing: border-box;
  display: flex;
}

.headernav-primary>a {
  font-size: 0;
  white-space: nowrap;
}

.headernav-primary h1 {
  margin: 0;
  padding: 0;
  color: #00b600;
  font-size: 0;
  background: url("../assets/doubanlogo.png") no-repeat;
  background-size: cover;
  height: 22px;
  width: 46px;
  display: inline-block;
}

.headernav-primary nav * {
  display: inline-block;
}

.headernav-primary nav ul {
  list-style: none;
  display: inline-block;
}

.headernav-primary nav ul li {
  font-size: 15px;
  margin-right: 19px;
}

.headernav-primary nav span {
  background: url("../assets/search.png") no-repeat;
  font-size: 0;
  background-size: cover;
  vertical-align: middle;
  width: 25px;
  height: 19px;
  margin-top: 4px;
  position: relative;
}

.headernav .headernav-second.isActive {
  height: 100%;
  position: absolute;
  bottom: 0;
  transform: translateZ(0);
}

.headernav .isHidden {
  display: none;
}

.headernav .headernav-second {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  background: #fff;
}

.headernav .headernav-secondary {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 19999;
  background: #fff;
}

.headernav .headernav-second .headernav-secondary .close-nav {
  position: absolute;
  top: 20px;
  left: 18px;
  color: #42bd56;
  font-size: 16px;
}

.headernav .headernav-second .headernav-secondary form {
  border-bottom: 1px solid #f3f3f3;
  padding: 15px 18px 15px 60px;
}

.headernav .headernav-second .headernav-secondary form input {
  box-sizing: border-box;
  -webkit-appearance: none;
  border: 0;
  background: url("../assets/searchlogo.png") no-repeat 50% #f3f3f3;
  background-size: 17.33333px;
  border-radius: 3px;
  width: 100%;
  height: 31px;
  font-size: 14px;
  outline: none;
}

.headernav .headernav-second .headernav-secondary form input:focus {
  background-image: none;
}

.headernav .headernav-second .headernav-secondary ul {
  padding-top: 25px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}

.headernav .headernav-second .headernav-secondary ul li {
  width: 33.33%;
}

.headernav .headernav-second .headernav-secondary ul li div {
  float: left;
  position: relative;
  left: 50%;
  top: 0;
}

.headernav .headernav-second .headernav-secondary ul li a {
  display: block;
  text-align: center;
  margin-bottom: 25px;
  position: relative;
  left: -50%;
  top: 0;
}

.headernav .headernav-second .headernav-secondary ul li div a strong {
  display: block;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}

.headernav .headernav-second .headernav-secondary ul li div a span {
  display: block;
  color: #999;
  height: 17px;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 17px;
}

.headernav .headernav-second .headernav-secondary .navBottom {
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
}

.headernav .headernav-second .headernav-secondary .navBottom .navitem {
  border-top: 1px solid #f3f3f3;
  padding: 13px 0;
  height: 20px;
  line-height: 20px;
}

.headernav .headernav-second .headernav-secondary .navBottom .navitem a {
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  color: #42bd56;
  width: 50%;
  display: block;
  float: left;
  box-sizing: border-box;
}

.headernav .headernav-second .headernav-secondary .navBottom .navitem a:first-child {
  border-right: 1px solid #e5e5e5;
}

.headernav .layer {
  /*background: rgba(0,0,0,0.5);
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;*/
}
</style>
