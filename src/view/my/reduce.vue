<template>
  <div class="add">
    <div class="head">
      <div class="img" @click="handleReturn">
        <img src="../../assets/fanhui.png" alt="">
      </div>
      <span class="conference"> 预约会议室 </span>
    </div>
    <div class="time">
      <span> 2019年9月26号 周四 </span>
    </div>
    <div class="addHome">
      <span class="name">  会议室一 </span>
      <span class="number"> 20人投影仪会议室 </span>
    </div>
    <div class="content">
      <div class="name">
        <div class="name-l">
          <span> 会议名称 </span>
        </div>
        <div class="ipt">
          <span> 关于国庆期间安全防范问题会议 </span>
        </div>
      </div>
      <div class="name">
        <div class="name-l">
          <span> 会议时间 </span>
        </div>
        <div class="ipt">
          <span> 14:00-15:00 </span>
        </div>
      </div>
      <div class="name">
        <div class="name-l">
          <span> 会议人数 </span>
        </div>
        <div class="ipt">
          <span> 16 </span>
        </div>
      </div>
    </div>
    <div class="bto">
      <div class="btn">
        <span> 取消申请 </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleReturn() {
        console.log('1111')
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .add{
    .head{
      position: sticky;
      top: 0;
      z-index: 99999;
      display: flex;
      width: 100%;
      height: 128px;
      align-items: center;
      justify-content: center;
      background: #fff;
      .img{
        position: absolute;
        left: 30px;
        img{
          width:34px;
          height:34px;
        }
      }
      .conference{
        color: #333333;
        font-size: 38px;
        font-family:PingFang SC;
        font-weight:500;
      }
    }
    .time{
      width: 100%;
      height: 78px;
      line-height: 78px;
      font-size: 0;
      text-align: center;
      background: #fff;
      span{
        font-size:28px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
    }
    .addHome{
      width: 100%;
      height: 91px;
      line-height: 91px;
      padding-left: 30px;
      box-sizing: border-box;
      font-size: 0;
      .name{
        margin-right: 30px;
        font-size:32px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
      }
      .number{
        font-size:28px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
      }
    }
    .content{
      background: #fff;
      .name{
        display: flex;
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #DCDEE6;
        .name-l{
          width: 190px;
          height: 100%;
          padding-left: 30px;
          box-sizing: border-box;
          line-height: 100px;
          font-size: 0;
          span{
            font-size:28px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
        }
        .ipt{
          flex: 1;
          height: 100%;
          line-height: 100px;
          font-size: 0;
         span{
           font-size:28px;
           font-family:PingFang SC;
           font-weight:400;
           color:rgba(51,51,51,1);
         }
        }
      }
    }
    .bto{
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 108px;
      background: #fff;
      .btn{
        width:670px;
        height:88px;
        line-height: 88px;
        background:rgba(62,94,255,1);
        box-shadow:0px 3px 15px 0px rgba(98,124,255,0.4);
        border-radius:44px;
        font-size: 0;
        text-align: center;
        span{
          font-size:32px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
</style>
