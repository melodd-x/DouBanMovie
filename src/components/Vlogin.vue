<template>
<div>
  <h1>
      <a href="http://localhost:8080/#/">取消</a>登录豆瓣
    </h1>
  <div class="mobile-accounts">
    <div class="form-element form-element-first">
      <input type="text" class="input" name="username" id="username" placeholder="邮箱 / 手机号 / 用户名" @blur="checkusername()">
      <span class="textrighterror">没有此用户名</span>
    </div>
    <div class="form-element form-pwd">
      <input type="password" class="input" name="form_password" id="userpassword" placeholder="密码">
      <span class="opt" :class="eyeoff" @click="changepass()"></span>
    </div>
    <div class="normal-hidden">
      用户名和密码错误
    </div>
    <div class="form-element submit-button">
      <button class="btn-submit" @click="checklogin()">登录</button>
    </div>
    <div class="item">

    </div>
  </div>
</div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'Vlogin',
  props: {

  },
  data() {
    return {
      eyeoff: "eyeoff",
      inputpass: "password",
    }
  },
  methods: {
    changepass: function() {
      if (this.inputpass == 'password') {
        $(".form-pwd input").attr("type", "text");
        this.inputpass = "text";
        this.eyeoff = "eyeon";
      } else {
        $(".form-pwd input").attr("type", "password");
        this.inputpass = "password";
        this.eyeoff = "eyeoff";
      }
    },
    checkusername: function() {
      var $this = this;
      $.ajax({
        type: "post",
        url: 'http://localhost:3000/users/checkusername',
        data: {
          username: $("#username").val()
        },
        success: function(res) {
          if (res.length != 0) {
            $(".textrighterror").css("display", "none");
          } else {
            $(".textrighterror").css("display", "block");
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
    },
    checklogin:function(){
      var $this = this;
      $.ajax({
        type: "post",
        url: 'http://localhost:3000/users/checklogin',
        data: {
          username: $("#username").val(),
          userpassword:$("#userpassword").val(),
        },
        success: function(res) {
          // console.log(res[0])
          if (res.length != 0) {
            $(".normal-hidden").css("visibility", "hidden");
            document.cookie="userid="+res[0].id;
            document.cookie="username="+$("#username").val();
            document.cookie="userpassword="+$("#userpassword").val();
            document.cookie="usernickname="+res[0].usernickname;
            window.location.href = "http://localhost:8080/#/";
          } else {
            $(".normal-hidden").css("visibility", "visible");
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
    },
  },
  components: {

  }
}
</script>

<style scoped>
.mobile-accounts .normal-hidden{
  height:36px;
  line-height: 36px;
  color:#f00;
  font-size: 15px;
  text-align: center;
  display: block;
  visibility: hidden;
}





input,button {
  outline: none;
}

h1 {
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #eee;
  padding: 0 18px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 45px;
  margin: 0 0 10px 0;
}

h1 a {
  color: #42bd56;
  font-size: 15px;
  font-weight: normal;
  position: absolute;
  left: 18px;
  top: 0;
}

a:link {
  color: #42bd56;
  text-decoration: none;
}

.mobile-accounts {
  padding: 15px;
}

.form-element {
  position: relative;
}

.form-element.form-element-first input {
  border-top-left-radius: 3px !important;
  border-top-right-radius: 3px !important;
  border-top: 1px solid #ccc !important;
}

.form-element input[type="text"],
.form-element input[type="password"] {
  -webkit-appearance: none;
  appearance: none;
  display: inline-block;
  height: 44px;
  font-size: 15px;
  margin: 0;
  padding: 0 8px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0;
  border-top: 0;
  width: 100%;
  line-height: 32px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 50px #fff inset;
  -webkit-text-fill-color: #333;
}

.form-element.submit-button {
  margin-top: 10px;
  text-align: center;
}

.form-element .btn-submit {
  cursor: pointer;
  font-size: 17px;
  text-align: center;
  width: 100%;
  padding: 10px 26px;
  color: #ffffff;
  background: #17AA52;
  border: 1px solid #17AA52;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.form-element .opt {
  display: block;
  height: 100%;
  width: 32px;
  position: absolute;
  right: 2px;
  top: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 22px;
  z-index: 5;
}

.form-element .eyeoff {
  background-image: url('../assets/eyeoff.png');
}

.form-element .eyeon {
  background-image: url('../assets/eyeon.png');
}
.textrighterror{
  position: absolute;
  top: 18px;
  right: 20px;
  color: #f00;
  display: none;
}
</style>
