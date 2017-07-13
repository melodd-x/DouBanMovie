<template>
<div>
  <template v-if="ready==true&&usertypeready==true">
      <h1 class="title">{{movieIdData.title}}</h1>
      <section class="subjectinfo">
        <div class="right">
          <img :src="movieIdData.images.large" class="cover">
        </div>
        <div class="left">
          <Vrating v-bind:ratingData="movieIdData.rating" :ratingcontents="movieIdData.ratings_count" :allowHalf="true"></Vrating>
          <p class="meta">{{contents}}</p>
          <a href="#" class="open-App">用App查看影人资料</a>
      </div>
    </section>
    <VuserMovie  v-if="usertypeready==true" :wantsee="wantsee"></VuserMovie>
        <!-- <VuserMovie></VuserMovie> -->
    <!-- <Vsubjectmark v-if="usertypeready==true" :movieIdData="movieIdData" :wantsee="wantsee"></Vsubjectmark> -->
    <Vwanttosee v-if='this.$store.state.wantsee==1' :vtitle="movieIdData.title" :vtags="vtags" :wantsee="wantsee"></Vwanttosee>
    <Vseen v-if='this.$store.state.wantsee==2' :vtitle="movieIdData.title" :vtags="vtags" :wantsee="wantsee"></Vseen>
    <Vmovieintrodust :vtitle="movieIdData.title" :vcontent="movieIdData.summary"></Vmovieintrodust>
    <Vtags :vtags="vtags"></Vtags>
  </template>
  <Vloading v-if="ready==false"></Vloading>
</div>
</template>

<script>
import $ from "jquery"
import Vrating from "./Vrating.vue"
import VuserMovie from "./VuserMovie.vue"
import Vmovieintrodust from "./Vmovieintrodust.vue"
import Vtags from "./Vtags.vue"
import Vloading from "./Vloading.vue"
import Vwanttosee from "./Vwanttosee.vue"
import Vseen from "./Vseen.vue"
import Vsubjectmark from "./Vsubjectmark.vue"


export default {
  name: 'Vsubjectinfo',
  data() {
    return {
      movieIdData: {},
      ready: false,
      contents: '',
      vtags: [],
      wantsee: 0,
      movieuserData: {},
      typeready: false,
      usertypeready: false,
    }
  },
  props: {

  },
  mounted: function() {
    function getmovieurl() {
      var arr = document.cookie.split(";");
      for (var i = 0; i < arr.length; i++) {
        var name = arr[i].split("=")[0];
        var value = arr[i].split("=")[1];
        if (name == " movieurl") {
          return value;
        }
      }
    };

    // console.log(getmovieurl());
    var $this = this;
    setTimeout(function() {
      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/movieapi',
        data: {
          url: getmovieurl()
          // $this.$store.state.movieUrl
        },
        // beforeSend: function(XMLHttpRequest) {
        //  $("#float").text("正在查询...");
        //  Pause(this,1000);
        // },
        success: function(res) {
          $this.movieIdData = res;
          $this.ready = true;
          $this.contents = $this.movieIdData.genres[0] + " / " + $this.movieIdData.genres[1] + " / " + $this.movieIdData.genres[2] +
            "/" + $this.movieIdData.directors[0].name + "（导演） / " + $this.movieIdData.casts[0].name + " / " + $this.movieIdData.casts[1].name + " / " +
            $this.movieIdData.casts[2].name + " / " + $this.movieIdData.casts[3].name + " / " + $this.movieIdData.year + "（" + $this.movieIdData.countries + "）上映";
          $this.vtags = $this.movieIdData.genres;
          $this.vtags.push($this.movieIdData.year);
          $this.vtags = $this.vtags.concat($this.movieIdData.countries);


        }
      })
    }, 100);

    var arrnew = document.cookie.split("; ");
    var username = "";
    var movieid = "";
    for (var i = 0; i < arrnew.length; i++) {
      var name = arrnew[i].split("=")[0];
      var value = arrnew[i].split("=")[1];
      if (name == "username") {
        if (value != "") {
          username = value;
        }
      } else if (name == "movieid") {
        movieid = value;
      } else {}
    };
    if (username == "") {
      $this.wantsee = 0;
      $this.usertypeready = true;

    } else {
      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/usermovie/checkmsg',
        data: {
          username: username,
          movieid: movieid
        },
        success: function(res) {
          console.log(res);
          $this.movieuserData = res;
          $this.wantsee = res[0].moviestate;
          $this.$store.commit("changestar", res[0].moviestar);



          $this.usertypeready = true;
          $this.typeready = true;

        },
        error: function() {
          $this.movieuserData = ""
          $this.wantsee = 0;
        }
      });
    }



  },
  methods: {},
  components: {
    Vrating,
    VuserMovie,
    Vmovieintrodust,
    Vtags,
    Vloading,
    Vwanttosee,
    Vseen,
    Vsubjectmark
  }
}
</script>

<style>
h1.title {
  margin: 30px 0 5px;
  font-size: 24px;
  line-height: 32px;
  word-break: break-all;
  font-weight: normal;
}

.subjectinfo {
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
}

.subjectinfo .right {
  float: right;
}

.subjectinfo .right .cover {
  display: block;
  width: 100px;
}

.subjectinfo .left {
  padding-bottom: 30px;
  margin-right: 100px;
}

.subjectinfo .left .rating {
  line-height: 18px;
  font-size: 15px;
  color: #494949;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
}

.subjectinfo .left .rating span {
  color: #aaa;
}

.subjectinfo .left .rating .strong {
  font-weight: normal;
  color: #494949;
  padding-right: 8px;
}




.subjectinfo .left .rating .rating-stars {
  display: inline-block;
  vertical-align: middle;
}

.subjectinfo .left .rating .rating-stars .rating-star {
  width: 13px;
  height: 13px;
  background-size: 13px 13px;
  background-image: url("../assets/emptystar.png");
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;
}

.subjectinfo .left .rating .rating-stars .rating-star-small-full {
  width: 13px;
  height: 13px;
  background-size: 13px 13px;
  background-image: url("../assets/fullstar.png");
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;
}

.subjectinfo .left .rating .rating-stars .rating-star-half-full {
  width: 13px;
  height: 13px;
  background-size: 13px 13px;
  background-image: url("../assets/halfstar.png");
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;
}

.subjectinfo .left .meta {
  color: #494949;
  margin-top: 15px;
  padding-right: 24px;
  font-size: 14px;
  line-height: 1.6;
}

.subjectinfo .left .open-App {
  display: block;
  font-size: 14px;
  line-height: 1;
  margin-top: 10px;
  margin-bottom: -30px;
}

















/*动画*/
</style>
