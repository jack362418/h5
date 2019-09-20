<template>
  <div id="app">
    <img src="./assets/logo.png" >
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {

  }
}
</script>

<style>
  ::-webkit-scrollbar{width:0;height:0px}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  height: 375px;
  width: 100%;
}
</style>
