<template>
<section class="card">
  <Vsubjectinfo></Vsubjectinfo>
</section>
</template>

<script>
import Vsubjectinfo from "./Vsubjectinfo.vue"
export default {
  name: 'Vmoviecard',
  props: {

  },
  data() {
    return {

    }
  },
  components: {
    Vsubjectinfo
  }
}
</script>

<style scoped>
.card {
  margin: 0 18px;
}
</style>
