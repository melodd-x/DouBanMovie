<template>
<div>
  <div class="firstpage" v-if="registertype==false">
    <div class="content">
      <h1 class="welcometodouban center">欢迎加入豆瓣</h1>
      <div class="input" id="getinput">
        <input type="text" placeholder="手机号 / 邮箱" id="getusername" @blur="checkusername()">
        <span class="textrighterror">请正确输入手机号 / 邮箱</span>
        <span class="textrightright">验证通过</span>
      </div>
      <div class="input" id="password">
        <input type="password" name="pass" id="getpassword" placeholder="密码 (最少6位)" v-model="passvalue" @keyup="checkpassstrange()" @blur="checkpassword()">
        <span class="opt" :class="eyeoff" @click="changepass()"></span>
        <div style="display:none">{{passvalue}}</div>
        <span class="passwordcheck"></span>
      </div>
      <div class="input" id="nickname">
        <input type="text" placeholder="昵称" id="getnickname" @keyup="checknickname()">
        <span class="textnickerror">请正确输入您的昵称</span>
        <span class="textnickright">验证通过</span>
      </div>
      <div class="opt-area">
        <button class="btn" @click="changepage()">下一步</button>
      </div>
      <p class="agreement">
        <span>点击「下一步」代表你已阅读并同意</span><a href="https://accounts.douban.com/app/agreement">用户使用协议</a>
      </p>
    </div>
    <a class="openapp" href="#">下载豆瓣App</a>
  </div>

  <div class="secondpage" v-if="registertype==true">
    <div class="content">
      <div class="complete">
        <div class="captcha-wrapper">
          <div class="sendmsg">接收验证的{{username}}</div>
          <div class="input" id="getcode">
            <input type="text" id="getcodenum" placeholder="验证码" @blur="checkcodenum()">
            <a class="codebtn" @click="getcode()">获取验证码</a>
          </div>
        </div>
        <div class="">

        </div>
        <div class="opt-area">
          <button class="btn" @click="submitregi()">提交</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'Vregister',
  props: {

  },
  data() {
    return {
      registertype: false,
      inputpass: "password",
      eyeoff: "eyeoff",
      usernamevalue:'',
      passvalue: '',
      nicknamevalue:'',
      username: '',
      typeusername: false,
      typepassword: false,
      typenickname: false,
      codenum: "",
      typecode: false,
    }
  },
  methods: {
    changepass: function() {
      if (this.inputpass == 'password') {
        $("#password input").attr("type", "text");
        this.inputpass = "text";
        this.eyeoff = "eyeon";
      } else {
        $("#password input").attr("type", "password");
        this.inputpass = "password";
        this.eyeoff = "eyeoff";
      }
    },
    changepage: function() {
      var e = event;
      if (this.typeusername == true && this.typepassword == true && this.typenickname == true) {
        this.registertype = true;
        e.preventDefault();
      } else {
        e.preventDefault();
      }
    },
    getcode: function() {
      var num = '';
      for (var i = 0; i < 6; i++) {
        num = num + parseInt(Math.random() * 10);
      }

      console.log(num);

      this.codenum = num;

      $(".codebtn").text("验证码已发送").css("color", "#ccc");
    },
    submitregi: function() {
      // window.location.href = "http://localhost:8080/#/"
      if (this.typecode == true) {
        // console.log("成功");
        // console.log(this.usernamevalue);
        // console.log(this.passvalue);
        // console.log(this.nicknamevalue);
        var $this=this;
        $.ajax({
          type: "post",
          url: 'http://localhost:3000/users/adduser',
          data: {
            username: $this.usernamevalue,
            userpassword: $this.passvalue,
            usernickname: $this.nicknamevalue
          },
          success: function(res) {
            // console.log(res);
            if(res.length != 0){
            console.log("注册成功");

            $.ajax({
              type: "post",
              url: 'http://localhost:3000/users/checklogin',
              data: {
                username: $this.usernamevalue,
                userpassword:$this.passvalue,
              },
              success: function(res) {
                console.log(res[0])
                if (res.length != 0) {
                  $(".normal-hidden").css("visibility", "hidden");
                  document.cookie="userid="+res[0].id;
                  document.cookie="username="+res[0].username;
                  document.cookie="userpassword="+res[0].userpassword;
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
          }
          },
          error: function(err) {
            console.log(err);
          }
        })
      }

    },
    checkusername: function() {
      var $this = this;
      $.ajax({
        type: "post",
        url: 'http://localhost:3000/users/checkusername',
        data: {
          username: $("#getusername").val()
        },
        success: function(res) {
          if (res.length != 0) {
            $(".textrighterror").text("该用户名已经被注册").css("display", "block");
          } else {
            var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            var phone = /^1\d{10}$/;
            if (re.test($("#getusername").val())) {
              $this.username = "邮箱： " + $("#getusername").val();
              $this.usernamevalue = $("#getusername").val();
              $(".textrighterror").text("请正确输入手机号 / 邮箱").css("display", "none");
              $(".textrightright").css("display", "block");
              $(".textrightright").text("邮箱验证成功");
              $this.typeusername = true;
            } else if (phone.test($("#getusername").val())) {
              $this.username = "电话： " + $("#getusername").val();
              $this.usernamevalue = $("#getusername").val();
              $(".textrighterror").text("请正确输入手机号 / 邮箱").css("display", "none");
              $(".textrightright").css("display", "block");
              $(".textrightright").text("电话验证成功");
              $this.typeusername = true;
            } else {
              $(".textrighterror").css("display", "block");
              $(".textrightright").css("display", "none");
            }
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
    },
    checkpassstrange:function() {
        var aStr = ["弱", "中", "强", "很强"];

        function checkStrong(val) {
          var modes = 0;
          if (val.length < 6) return 0;
          if (/\d/.test(val)) modes++; //数字
          if (/[a-z]/.test(val)) modes++; //小写
          if (/[A-Z]/.test(val)) modes++; //大写
          if (/\W/.test(val)) modes++; //特殊字符
          if (val.length > 15) return 4;
          return modes;
        };
        var val = $("#getpassword").val();
        var num = checkStrong(val);
        switch (num) {
          case 0:
            break;
          case 1:
            $(".passwordcheck").css('color', 'red').text(aStr[0]);
            break;
          case 2:
            $(".passwordcheck").css('color', '#ffbf44').text(aStr[1]);
            break;
          case 3:
            $(".passwordcheck").css('color', '#42bd56').text(aStr[2]);
            break;
          case 4:
            $(".passwordcheck").css('color', '#42bd56').text(aStr[3]);
            break;
          default:
            break;
        }
      },
    checkpassword:function() {
      var $this = this;
      if ($(".passwordcheck").text() == "" || $(".passwordcheck").text() == "弱" || $(".passwordcheck").text() == "中") {

      } else {
        $(".passwordcheck").text("");
        $this.typepassword = true;
      }
    },
    checknickname:function() {
      var $this = this;
      $.ajax({
        type: "post",
        url: 'http://localhost:3000/users/checknickname',
        data: {
          usernickname: $("#getnickname").val()
        },
        success: function(res) {
          if (res.length != 0) {
            $(".textnickerror").text("该昵称已经被注册").css("display", "block");
            $(".textnickright").css("display", "none");
          } else {
            if ($("#getnickname").val() != "") {
              $(".textnickerror").css("display", "none");
              $(".textnickright").css("display", "block");
              $this.nicknamevalue=$("#getnickname").val();
              $this.typenickname = true;
            } else {
              $(".textnickerror").css("display", "block");
              $(".textnickright").css("display", "none");
            }
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
    },
    checkcodenum:function() {
      var $this = this;
      // console.log("blur成功");
      // console.log($("#getcodenum").val());
      // console.log($this.codenum);
      if ($("#getcodenum").val() == $this.codenum) {
        // console.log("参数正确")
        $this.typecode = true;
      }
    },

  },

  mounted: function() {

  },
  computed: {

  },
  components: {

  }
}
</script>

<style scoped>
* {
  outline: 0;
  -webkit-tap-highlight-color: transparent;
}

.center {
  text-align: center;
}

.content {
  height: 100%;
}

.firstpage .content {

  padding: 20px;
  padding-top: 0;
}

.content .welcometodouban {
  color: #42bd56;
  font-size: 40px;
  margin: 10% 0 9%;
  font-weight: 300;
  height: 53px;
  line-height: 53px;
}

#getinput {
  border-bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
}

.input {
  color: #494949;
  height: 44px;
  background: #fff;
  border: 1px solid #d7d7d7;
  overflow: hidden;
  position: relative;
}

.input input {
  border: 0 none;
  width: 96%;
  background: #fff;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 10px;
  margin-top: 7px;
  outline: 0;
}

.input .opt {
  padding: 0;
  top: 16px;
  right: 10px;
  height: 18px;
  width: 18px;
  text-indent: -999em;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  text-decoration: none;
  font-size: 13px;
  position: absolute;
  line-height: 44px;
  color: #42bd56;
  display: block;
}

.input .eyeoff {
  background-image: url('../assets/eyeoff.png');
}

.input .eyeon {
  background-image: url('../assets/eyeon.png');
}

#nickname {
  border-top: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.opt-area {
  margin-top: 10px;
}

.opt-area .btn {
  font-size: 16px;
  border-radius: 3px;
  border: 0 none;
  background: #42bd56;
  display: block;
  width: 100%;
  height: 44px;
  color: #fff;
  transition: all 0.3s ease-out;
}

.textrighterror {
  position: absolute;
  top: 18px;
  left: 200px;
  color: #f00;
  display: none;
}

.textrightright {
  position: absolute;
  top: 18px;
  left: 250px;
  color: #42bd56;
  display: none;
}

.passwordcheck {
  position: absolute;
  top: 18px;
  left: 250px;
}

.textnickerror {
  position: absolute;
  top: 18px;
  left: 200px;
  color: #f00;
  display: none;
}

.textnickright {
  position: absolute;
  top: 18px;
  left: 250px;
  color: #42bd56;
  display: none;
}

.firstpage .agreement {
  font-size: 14px;
  color: #ccc;
  text-align: center;
}





.agreement a {
  text-decoration: underline;
  color: #ccc;
}

.firstpage .openapp {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #42bd56;
}

.secondpage .complete {
  padding: 20px;
  padding-top: 10%;
}

.complete .sendmsg {
  color: #9b9b9b;
  font-size: 13px;
  margin-bottom: 10px;
}

#getcode {
  border-radius: 4px;
}

#getcode input {
  float: left;
  width: 60%;
}

#getcode a {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 15px;
  border-left: 1px solid #ccc;
  padding-left: 11px;
  margin-top: 12px;
}
</style>
