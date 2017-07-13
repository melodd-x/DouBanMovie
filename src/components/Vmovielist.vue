<template>
<section class="movielist">
  <header>
    <h2>{{listtitle}}</h2>
    <div style="float:right" @click="getname()">
      <router-link to="/moviemore">更多</router-link>
    </div>
    <div class="cleanfix"></div>
  </header>

  <div class="content-section">
    <Vloading v-if="ready==false"></Vloading>
    <ul>
      <template v-if="ready==true">
          <li v-for="n in 8"  @click="getsubject(n-1)">
            <router-link to="/subject">
              <div class="item-poster" :style="{backgroundImage: 'url('+movieData.subjects[n-1].images.medium+')'}">
              </div>
              <span class="item-title">{{movieData.subjects[n-1].title}}</span>
              <div class="item-rating">
              <Vrating v-bind:ratingData="movieData.subjects[n-1].rating" :ratingcontents="0" :allowHalf="false"></Vrating>
              </div>
            </router-link>
          </li>
        </template>
    </ul>
  </div>
</section>
</template>

<script>
import $ from "jquery"
import Vrating from "./Vrating.vue"
import Vloading from "./Vloading.vue"
export default {
  name: 'Vmovielist',
  data() {
    return {
      movieData: {
        subjects: []
      },
      ready: false,
      // key:""
    }
  },
  mounted: function() {
    var $this = this;
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/movieapi',
      data: {
        url: this.url
      },
      success: function(data) {
        $this.movieData = data;
        $this.ready = true;
      }
    })
  },
  methods: {
    getsubject: function(a) {
      // var id=this.movieData.subjects[a].id;
      // alert(this.movieData.subjects[a].id);
      // alert("传给vuex");
      // console.log(this.movieData.subjects[a].id);
      // console.log(this.movieData.subjects[a].title);
      // this.$store.commit("selectMovie", this.movieData.subjects[a].id);
      document.cookie="movieid="+this.movieData.subjects[a].id;
      document.cookie="movieurl=http://api.douban.com/v2/movie/subject/"+this.movieData.subjects[a].id;
      this.$store.commit("selectMovieUrl", this.movieData.subjects[a].id);
      // setTimeout(getsubject(),3000);
      // this.$store.commit("selectMovie", this.movieData.subjects[a].id);
      // alert(this.movieData.subjects[a].title);
      // console.log('http://api.douban.com/v2/movie/subject/'+this.$store.state.movieid);
    },
    getname:function(){
      this.$store.commit("selectMovieUrlMore", this.url);
      this.$store.commit("selectMovieMore", this.listtitle);
    }
  },
  props: {
    url: String,
    listtitle: String,
    // movieid: String,
    // movieUrl:String
  },
  components: {
    Vrating,Vloading
  }
}
</script>

<style scoped>

</style>
