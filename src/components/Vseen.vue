<template>
<section>
  <div class="hd">
    <span class="title">{{vtitle}}</span>
    <a class="btn-cancel" href="javascript:void(0)" @click="quitsent()">取消</a>
    <a href="javascript:void(0)" class="btn-ok" @click="sentmsgtomysql()">确定</a>
  </div>
  <div class="bd">
    <Vratingstar @lessonchild="lessonchildmsg"></Vratingstar>
    <div class="interest-bd">
      <div class="tit">打标签</div>
      <div class="con remark">
        <a v-for="n in vtags.length" class="normal" href="javascript:void(0)" @click="changestyle(n-1)">{{vtags[n-1]}}</a>
        <!-- <input id="input-tag" class="hide" size="5" type="text" @blur="compulatetag()"> -->

        <!-- <a href="javascript:void(0)" class="add-tag" @click="addtag()">+</a> -->
      </div>
      <div class="tit">写短评</div>
      <div class="con">
        <textarea style="overflow:hidden; resize:none;"></textarea>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import $ from "jquery"
import Vratingstar from "./Vratingstar.vue"
export default {
  name: 'Vseen',
  props: {
    vtitle: String,
    vtags: Array,
    wantsee:Number,
  },
  data() {
    return {
      value: "",
      tags: [],
      // type:false,

    }
  },
  mounted:function(){
    var $this = this;
    var nameu = "";
    var idmovie = "";
    var arr = document.cookie.split(";");
    for (var i = 0; i < arr.length; i++) {
      var name = arr[i].split("=")[0];
      var value = arr[i].split("=")[1];
      if (name == " username") {
        nameu = value;
      } else if (name == " movieid") {
        idmovie = value;
      }
    }

      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/usermovie/checkmsg',
        data: {
          // url: getmovieurl(),
          username: nameu,
          movieid: idmovie,
          // $this.$store.state.movieUrl
        },
        // beforeSend: function(XMLHttpRequest) {
        //  $("#float").text("正在查询...");
        //  Pause(this,1000);
        // },
        success: function(res) {
          if(res!="no"){
            type=false;
          }
          else{
            console.log("服务器已有数据");
            type=true;
          }


        }
      })
  },

  methods: {
    lessonchildmsg: function(rate) {
      this.value = rate;
    },
    changestyle: function(i) {
      function removeByValue(arr, val) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == val) {
            arr.splice(i, 1);
            break;
          }
        }
      }
      if ($(".remark a.normal:eq(" + i + ")").hasClass("selected")) {
        $(".remark a.normal:eq(" + i + ")").removeClass("selected");
        removeByValue(this.tags,$(".remark a.normal:eq(" + i + ")").text());
        // console.log(this.tags);
      } else {
        $(".remark a.normal:eq(" + i + ")").addClass("selected");
        this.tags.push($(".remark a.normal:eq(" + i + ")").text());
        // console.log(this.tags);
      }
    },
    quitsent:function(){
      this.$store.commit("changewantsee", 0);
    },
    // addtag:function(){
    //   $("#input-tag").removeClass("hide")
    // },
    // compulatetag:function(){
    //   // console.log($("#input-tag").val());
    //   $("#input-tag").before("<a>"+$("#input-tag").val()+"</a>");
    //   $("#input-tag").val()="";
    //
    //   $("#input-tag").addClass("hide");
    // },
    sentmsgtomysql: function() {




      var $this = this;
      var nameu = "";
      var idmovie = "";
      var arr = document.cookie.split(";");
      for (var i = 0; i < arr.length; i++) {
        var name = arr[i].split("=")[0];
        var value = arr[i].split("=")[1];
        if (name == " username") {
          nameu = value;
        } else if (name == " movieid") {
          idmovie = value;
        }
      }

      if(nameu==""){
        window.location.href="http://localhost:8080/#/login"
      }
      else{
        if(this.wantsee==1||this.wantsee==2){
      setTimeout(function() {
        $.ajax({
          type: "POST",
          url: 'http://localhost:3000/usermovie/sendmsg',
          data: {
            // url: getmovieurl(),
            username: nameu,
            movieid: idmovie,
            moviestate: 2,
            moviestar: $this.value*10,
            movieContent: $("textarea").val(),
            movieContenttags: $this.tags.join(","),
            movieupvote: 0,
            // $this.$store.state.movieUrl
          },
          // beforeSend: function(XMLHttpRequest) {
          //  $("#float").text("正在查询...");
          //  Pause(this,1000);
          // },
          success: function(res) {

            $this.$store.commit("changewantsee", 0);
            window.location.href="http://localhost:8080/#/"
          }
        })
      }, 50)}

      else{
        setTimeout(function() {
          $.ajax({
            type: "POST",
            url: 'http://localhost:3000/usermovie/update',
            data: {
              // url: getmovieurl(),
              username: nameu,
              movieid: idmovie,
              moviestate: 2,
              moviestar: $this.value*10,
              movieContent: $("textarea").val(),
              movieContenttags: $this.tags.join(","),
              movieupvote: 0,
              // $this.$store.state.movieUrl
            },
            // beforeSend: function(XMLHttpRequest) {
            //  $("#float").text("正在查询...");
            //  Pause(this,1000);
            // },
            success: function(res) {
              $this.$store.commit("changewantsee", 0);
              window.location.href="http://localhost:8080/#/"
            }
          })
        }, 50)
      }
    }
    }

  },
  components: {
    Vratingstar
  }
}
</script>

<style scoped>
section {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 44px;
  overflow: auto;
  background: #fff;
  z-index: 30000;
}

section .hd {
  height: 44px;
  width: 100%;
  color: #333;
  border-bottom: 1px solid #efefef;
  font-size: 20px;
  line-height: 44px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background: #fff;
}

section .hd .title {
  display: inline-block;
  width: 70%;
  margin: 0 15%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.hd a {
  color: #42bd56;
  font-size: 15px;
  position: absolute;
  top: 0;
  z-index: 30001;
}

.hd .btn-cancel {
  left: 18px;
}

.hd .btn-ok {
  right: 18px;
}

section .bd {
  max-width: 650px;
  margin: 0 auto;
}

section .bd .interest-bd {
  padding: 0 18px;
  position: relative;
}

.interest-bd .tit {
  margin-top: 40px;
  padding-bottom: 10px;
  color: #aaa;
  font-size: 15px;
}

.interest-bd .remark {
  font-size: 0;
}

.interest-bd .remark a {
  height: 34px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 34px;
  padding: 0 15px;
  margin: 0 5px 10px;
  color: #aaa;
  font-size: 17px;
  line-height: 34px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  background: #fff;
}

.interest-bd .remark #input-tag {
  height: 34px;
  min-width: 80px;
  max-width: 200px;
  border: 0;
  border-radius: 28px;
  padding: 0 15px 2px;
  margin-bottom: 10px;
  font-size: 17px;
  line-height: 34px;
  vertical-align: top;
  color: #fff;
  text-align: center;
  background: #42bd56;
}

.interest-bd .remark .hide {
  display: none;
}

.interest-bd .remark .selected {
  border: 1px solid #42bd56;
  color: #fff;
  background: #42bd56;
}

.interest-bd .remark a.add-tag {
  font-size: 20px;
  line-height: 30px;
}

.interest-bd textarea {
  height: 130px;
  width: 100%;
  font-size: 17px;
  color: #494949;
  line-height: 1.5;
  border-radius: 2px;
  padding: 15px;
  background-color: #fff;
  box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.05), inset -1px -1px 2px 0 rgba(0, 0, 0, 0.05);
  border: solid 0.5px #ccc;
  box-sizing: border-box;
  -webkit-appearance: none;
}
</style>
