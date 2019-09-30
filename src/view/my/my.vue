<template>
  <div class="main">
   <div class="my-head">
     <div class="head">
       <span class="conference"> 我的预约 </span>
     </div>
     <div class="infor">
       <div class="name">
         <span> 名字: </span>
         <span> {{ loginName }} </span>
       </div>
       <div class="department">
         <span> 部门: </span>
         <span> {{ departmentName }} </span>
       </div>
     </div>
   </div>
   <div class="content" ref="wrapper">
     <div class="item" v-if="isShow">
       <div class="item-inr" v-for="(item,index) in MyReservationList">
         <div class="l">
          <p class="name">会议名称：{{ item.reservationName}}</p>
          <p class="time">申请时间: {{ item.data }} {{ item.beginTime }}-{{ item.endTime }}</p>
         </div>
         <div class="r">
           <img src="" alt="">
         </div>
       </div>
     </div>
     <div class="reco" v-else>
       <div class="img">
         <img src="../../assets/record.png">
       </div>
       <div class="name"> ~还没有预约记录哦~ </div>
     </div>
   </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isShow: false,
        loginName: '',
        departmentName: '',
        MyReservationList: []
      }
    },
    created() {
      this.getInfo()
      this.getMyReservation(1)
    },
    mounted() {
        if(this.isShow) {
       this.scroll = new BScroll(this.$refs.wrapper,{
         click: true
       })
     }
    },
    methods: {
      //获取个人信息
      getInfo() {
        this.$http.getInfo().then((res) => {
          if(res.code == 200) {
            this.loginName = res.data.loginName
            this.departmentName = res.data.departmentName
          }
        })
      },
      //获取个人的预约记录
      getMyReservation(n) {
        let data = {
          page: n
        }
        this.$http.getMyReservation(data).then((res) => {
          if(res.code == 200) {
            this.MyReservationList = res.data.list
            if(res.data.list.length == 0) {
              this.isShow = false
            }else{
              this.isShow = true
            }
          }
          console.log('我的预约记录',res)
        })
      }
    }
  }
</script>

<style scoped lang="less">
.main{
  .my-head{
    position: sticky;
    top: 0;
    z-index: 99999;
    .head{
      display: flex;
      width: 100%;
      height: 128px;
      align-items: center;
      justify-content: center;
      background: #fff;
      .conference{
        color: #333333;
        font-size: 38px;
        font-family:PingFang SC;
        font-weight:500;
      }
    }
    .infor{
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      padding-left: 30px;
      box-sizing: border-box;
      background: #fff;
      .name{
        font-size: 0;
        height: 100%;
        line-height: 100px;
        margin-right: 60px;
      }
      .department{
        font-size: 0;
        line-height: 100px;
        height: 100%;
      }
      span{
        font-size:30px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
  }
  .content{
    position: fixed;
    overflow: hidden;
    top: 228px;
    left: 0;
    right: 0;
    bottom: 98px;
    padding: 20px 30px 0 30px;
    box-sizing: border-box;
    background: #f0f2fa;
    .item{
      .item-inr{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 690px;
        height: 154px;
        background:rgba(255,255,255,1);
        border-radius:20px;
        margin-bottom: 20px;
        font-size: 0;
        .l{
          height: 100%;
          padding: 30px 24px 30px 30px;
          box-sizing: border-box;
          .name{
            margin-bottom: 30px;
          }
          p{
            font-size:28px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
        }
      }
    }
    .reco{
      margin-top: 177px;
      font-size: 0;
      .img{
        width: 230px;
        height: 204px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .name{
        margin-top: 40px;
        font-size:28px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
        text-align: center;
      }
    }
  }
}
</style>
