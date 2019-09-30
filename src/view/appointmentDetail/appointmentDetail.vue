<template>
  <div class="main-detail">
    <div class="head">
      <div class="img" @click="returnGo">
        <img src="../../assets/fanhui.png" alt="">
      </div>
      <span class="conference"> 预约会议室 </span>
    </div>
    <div class="time">
      <span> 2019年9月26号 周四 </span>
    </div>
    <div class="content" ref="wrapper">
      <div class="content-item">
        <div class="title">
          <span class="name"> 会议室一 </span>
          <span class="number"> 20人投影仪会议室 </span>
        </div>
        <div class="morning">
          <span class="tip"> 上午 </span>
          <div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
          </div>
          <div class="slider slider-t"></div>
          <img src="../../assets/ti.png" alt="" class="ti">
        </div>
        <div class="afternoon">
          <span class="tip"> 下午 </span>
          <div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
            <div class="item-inr">
              <div class="l">
                <p class="name">会议名称：项目申报会议</p>
                <p class="time">
                  <span> 申请时间: 9:00-9:30 </span>
                  <span> 申请人：张三 </span>
                </p>
              </div>
            </div>
          </div>
          <div class="slider"></div>
          <img src="../../assets/ti.png" alt="" class="ti">
          <img src="../../assets/ti.png" alt="" class="ti-bto" >
        </div>
      </div>
    </div>
    <div class="bto">
      <div class="btn" @click="fn">
        <span> 预约会议室 </span>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        getRecordDetailList: []
      }
    },
    created(){
      this.id = this.$route.params.id
      this.getReservationDetail(this.$route.params.id)
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        bounce: false
      })

      this.scroll.on('scrollEnd',()=>{
        //do something
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          console.log('加载')
        }
      })
    },
    methods: {
      fn() {
        this.$router.push({
          name: 'add'
        })
      },
      //返回上一条记录
      returnGo() {
        this.$router.go(-1)
      },

      getReservationDetail(id) {
        console.log(id)
        let data = {
          id,
          date: '2019-09-28'
        }
        this.$http.getReservationDetail(data).then((res) => {
          if(res.code == 200) {
            this.getRecordDetailList = res.data.list
          }
        })
      },

    }
  }
</script>

<style scoped lang="less">
  .main-detail{
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
    .content{
      position: fixed;
      overflow: hidden;
      top: 206px;
      left: 0;
      right: 0;
      bottom: 108px;
      padding: 20px 30px 0 30px;
      box-sizing: border-box;
      background: #f0f2fa;
      .title{
        font-size: 0;
        padding-top: 32px;
        margin-bottom: 26px;
        .name{
          font-size:32px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(51,51,51,1);
          margin-right: 30px;
        }
        .number{
          font-size:28px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(102,102,102,1);
        }
      }
      .afternoon,
      .morning{
        width: 690px;
        position: relative;
        padding: 1px;
        .slider{
          position: absolute;
          width: 4px;
          height: 100%;
          top: 24px;
          background:rgba(62,94,255,1);
        }
        .tip{
          display: block;
          font-size:26px;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(102,102,102,1);
          margin: 0 0 20px 20px;
        }
        .ti{
          position: absolute;
          width: 16px;
          height: 16px;
          left: -4px;
          top: 10px;
        }
        .ti-bto{
          position: absolute;
          width: 16px;
          height: 16px;
          left: -4px;
          bottom: -30px;
        }
        .item-inr{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 660px;
          height: 154px;
          background:rgba(255,255,255,1);
          border-radius:20px;
          margin:0 0 20px 30px;
          font-size: 0;
          .l{
            height: 100%;
            padding: 30px 24px 30px 30px;
            box-sizing: border-box;
            .name{
              /*margin-bottom: 30px;*/
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
      .morning{
        .slider-t{
          height: calc( 100% + 6px);
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
      z-index: 99;
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
