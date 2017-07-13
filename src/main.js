// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from "axios"
import Vuex from "vuex"





Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movieUrl:"",
    movieid: "",
    moviemorename:'',
    moviemoreurl:'',
    wantsee:0,
    star:0
  },
  mutations: {
    selectMovieUrl(state,data){
      state.movieUrl="http://api.douban.com/v2/movie/subject/"+data
    },
    selectMovie(state, id) {
      state.movieid = id
    },
    selectMovieMore(state, name) {
      state.moviemorename = name
    },
    selectMovieUrlMore(state, url) {
      state.moviemoreurl = url
    },
    changewantsee(state,pagev){
      state.wantsee=pagev
    },
    changestar(state,stars){
      state.star=stars
    }

  }
})





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
