import Vue from 'vue'
import Router from 'vue-router'
import Vmoviemain from "@/components/Vmoviemain"
import Vmoviesubject from "@/components/Vmoviesubject"
import Vmoviemore from "@/components/Vmoviemore"
import Vlogin from "@/components/Vlogin"
import Vregister from "@/components/Vregister"



import $ from "jquery"
// window.$ = $;
// window.jQuery = $;
// export default $;


Vue.use(Router)





export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmoviemain',
      component: Vmoviemain
    },
    {
      path: '/subject',
      name: 'Vmoviesubject',
      component: Vmoviesubject
    },
    {
      path: '/moviemore',
      name: 'Vmoviemore',
      component: Vmoviemore
    },
    {
      path: '/login',
      name: 'Vlogin',
      component: Vlogin
    },
    {
      path: '/register',
      name: 'Vregister',
      component: Vregister
    },
  ]
})
