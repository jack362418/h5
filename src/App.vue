<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
    <tabber />
  </div>
</template>

<script>
  import tabber from './components/comment/footer'
export default {
    data() {
      return {
        isShow: false
      }
    },
   components: {
     tabber
   }
}
</script>

<style scoped lang="less">
  /*.v-enter,.v-leave-to{*/
    /*transform: translate3d(100%,0,0);*/
  /*}*/
  /*.v-enter-active,.v-leave-active{*/
    /*transition:all 0.3s;*/
  /*}*/
  #app{
    width: 100%;
  }

</style>
