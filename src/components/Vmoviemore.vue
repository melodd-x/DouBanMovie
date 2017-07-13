<template>
<div>
  <Vmenu></Vmenu>
  <section class="contents">
    <h1>{{movielisttitle}}</h1>
    <div class="grid">
      <ul>
        <template v-if="ready==true">
            <li v-for="n in counts"  @click="getsubject(n-1)">
              <router-link to="/subject">
                <div class="item-poster">
                  <img :src="movieData.subjects[n-1].images.medium" width="100%">
                </div>
                <div class="item-info">
                  <h3 class="item-title">{{movieData.subjects[n-1].title}}</h3>
                  <div class="item-rating">
                  <Vrating v-bind:ratingData="movieData.subjects[n-1].rating" :ratingcontents="0" :allowHalf="false"></Vrating>
                </div>

                </div>
              </router-link>
            </li>
          </template>
          <Vloading v-if="ready==false"></Vloading>
      </ul>
    </div>


  </section>
</div>
</template>

<script>
import $ from "jquery"
import Vmenu from "./Vmenu.vue"
import Vrating from "./Vrating.vue"
import Vloading from "./Vloading.vue"
export default {
  name: 'Vmoviemore',
  props: {
    moviemoreurl: String,
    moviemorename: String
  },
  data() {
    return {
      movielisttitle: "",
      movieData: {
        subjects: []
      },
      ready: false,
      counts: 0
    }
  },
  mounted: function() {
    var $this = this;
    setTimeout(function() {
      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/movieapi',
        data: {
          url: $this.$store.state.moviemoreurl
        },
        success: function(data) {
          console.log(data);
          $this.movielisttitle = $this.$store.state.moviemorename;
          $this.movieData = data;
          $this.ready = true;
          $this.counts = data.count;
        }
      })
    }, 1)
  },
  methods: {
    getsubject: function(a) {
      this.$store.commit("selectMovieUrl", this.movieData.subjects[a].id);
    }
  },
  components: {
    Vmenu,
    Vrating,
    Vloading
  }
}
</script>

<style>
.contents {
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 47px;
  max-width: 650px;
  margin: 0 auto;
  overflow-x: hidden;
  color: #494949;
}

.contents h1 {
  font-size: 24px;
  font-weight: normal;
  box-sizing: border-box;
  max-width: 660px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6px;
  padding-left: 4%;
}

.grid {
  padding: 20px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 660px;
  overflow: hidden;
  box-sizing: border-box;
}

.grid li {
  text-decoration: none;
  color: #9b9b9b;
  float: left;
  box-sizing: border-box;
  width: 33.33333%;
  padding-left: 4%;
  padding-right: 4%;
  margin-bottom: 20px;
  overflow: hidden;
}

.grid li .item-poster {
  min-height: 87px;
  overflow: hidden;
  position: relative;
}

.grid li .item-poster::before {
  padding-top: 143%;
  content: "";
  display: block;
  /*padding-top: 100%;*/
}

.grid li .item-poster img {
  display: block;
  position: absolute;
  left: -100%;
  right: -100%;
  top: -100%;
  bottom: -100%;
  margin: auto;
  min-height: 100%;
  min-width: 100%;
}

.grid li .item-info {
  height: 45px;
  overflow: hidden;
}

.grid li .item-info h3 {
  font-size: 13px;
  font-weight: normal;
  padding: 5px 0 0;
  color: #494949;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 0;
}

.grid li .item-info .item-rating {
  height: 16px;
  font-size: 12px;
  padding-top: 3px;
  text-align: center;
  color: #9b9b9b;
}
.grid li .item-info .item-rating .rating-stars {
  display: inline-block;
  vertical-align: middle;
}

.grid li .item-info .item-rating .rating-stars .rating-star {
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
  background-image: url("../assets/emptystar.png");
  display: inline-block;
  margin-right: 1px;
  background-color: transparent;
  background-repeat: no-repeat;
}

.grid li .item-info .item-rating .rating-stars .rating-star-small-full {
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
