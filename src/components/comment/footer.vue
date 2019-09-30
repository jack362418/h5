<template>
  <div class="footer">
    <!--<router-link to="/" class="ft" tag="div" @click="fn">-->
      <!--<img :src="active ? '' : ''" alt="" v-if="">-->
      <!--<span> 会议室预约 </span>-->
    <!--</router-link>-->
    <!--<router-link to="/my" class="ft" tag="div" @click="fn">-->
      <!--<img src="" alt="">-->
      <!--<span> 我的预约 </span>-->
    <!--</router-link>-->
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in Tabbar" :to="(item.linkTo)">
        <span>{{ item.title }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.active : item.normal"
        >
      </van-tabbar-item>
    </van-tabbar>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        Tabbar: [
          {
            name: 'index',
            linkTo: '/',
            title: '会议室预约',
            normal: require('../../assets/yuyue.png'),
            active: require('../../assets/yuyueAct.png')
          },
          {
            name: 'my',
            linkTo: '/my',
            title: '我的预约',
            normal: require('../../assets/my.png'),
            active: require('../../assets/myAact.png')
          },
        ],
        icon: {
          normal: require('../../assets/yuyue.png'),
          active: require('../../assets/yuyueAct.png')
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .van-tabbar--fixed{
    height: 98px;
    font-size: 0;
    .van-tabbar-item{
      font-size: 20px;
      .van-tabbar-item__icon img{
        display: block;
        height: 48px;
        width: 48px;
      }
    }
  }
</style>
