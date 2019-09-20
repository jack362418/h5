<template>
  <div class="ant">
    <h1> {{ name }} </h1>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
     return{
       name: '模板'
     }
    }
  }
</script>

<style scoped lang="less">
  .ant{
    h1{
      color: #f40;
    }
  }
</style>
