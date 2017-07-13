<template>
<div>
  <Vmenu></Vmenu>
  <Vtopbanner></Vtopbanner>
  <Vmoviecard></Vmoviecard>



</div>
</template>

<script>
import Vmenu from "./Vmenu.vue"
import Vtopbanner from "./Vtopbanner.vue"
import Vmoviecard from "./Vmoviecard.vue"
export default {
  name: 'Vmoviesubject',
  data() {
    return {

    }
  },

  computed: {
    // getid:function (){
    //   return this.$store.state.movieid
    // }

  },
  components: {
    Vmenu,
    Vmoviecard,
    Vtopbanner
  },
  props: {

  }
}
</script>

<style scoped>

</style>
