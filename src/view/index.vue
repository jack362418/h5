<template>
  <div class="main">
    <div class="head">
      <span class="conference"> 会议室预约 </span>
    </div>
    <div class="bSorll" ref="content">
      <div>
        <div class="main-top">
          <div class="time"  @click="showpopup">
            <img src="../assets/time.png" alt="" class="timeImg">
            <span class="date"> {{ nowYear }}年{{ nowMonth }}月</span>
            <img src="../assets/xiala.png" alt="" class="selestImg">
          </div>
          <div class="time-select" ref="wrapper">
            <ul ref="wrapperItem" class="wrapperItem">
              <li ref="item" v-for="(item,index) in week" class="item">
                <p class="txt" @click="fn(index)">
                  <span> {{ item.weekday }} </span>
                  <span :style="{color:(index + 1 == nowDay ? '#3E5EFF' : '')}" :class="{'active':index + 1 == activeNum}"> {{ item.numDay }} </span>
                </p>
              </li>

              <!--<li v-for="(item,index) in week">-->
              <!--<span> {{ item.weekday }} </span>-->
              <!--<span> {{ item.numDay }} </span>-->
              <!--</li>-->
            </ul>
          </div>
        </div>
        <div class="conference-room">
          <div class="room-list" v-for="(item,index) in allRecordList" @click="getRecordDetail(item.id)">
            <div class="room-top">
              <div class="img">
                <img src="http://www.jhywo.com/static/image/1563116304105.png" alt="" width="220" height="160">
              </div>
              <div class="room-name">
                <h2 class="title"> {{ item.roomName }} </h2>
                <span class="inr"> {{ item.reservationNumber }}人{{ item.reservationName }} </span>
              </div>
              <div class="btn">
                <span> 预约 </span>
              </div>
            </div>
            <div class="room-bto">
              <div class="duration" v-for="(item,index) in timeArr">
                <span>{{ item.time }}</span>
                <div class="duration-time"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @cancel="cancel"
        @confirm="confirm"
      />
    </van-popup>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return{
        timeArr: [],
        week: [],
        allRecordList: [],
        nowYear: '',
        nowMonth: '',
        nowDay: '',
        dataLen: 0,
        activeNum: 0,
        currentDate: new Date(),
        show: false
      }
    },

    created() {
      let date = new Date();
      // let year = date.getFullYear();
      // let month = date.getMonth() + 1;
      // let day = date.getDate();
      // console.log(year,month,day)
      this.nowYear = date.getFullYear()
      this.nowMonth = date.getMonth() + 1
      this.nowDay = date.getDate()
      this.dataLen = new Date(this.nowYear,this.nowMonth,0).getDate();
      this.createDay(this.nowYear,this.nowMonth,this.nowDay, this.dataLen)
      this.createdTime()
      this.getAllRecordList(1)
    },

    //横向滚动渲染
    mounted() {
        let width = 0
        for(let i = 0; i<this.dataLen; i++){
          width+=this.$refs.item[i].clientWidth
        }
        this.$refs.wrapperItem.style.width = width + 'px';
        this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        scrollX: true,
        scrollY: false
      })
      this.scroll.scrollToElement(this.$refs.item[this.nowDay - 1])

      this.scroll = new BScroll(this.$refs.content,{
        click: true,
        scrollX: false,
        scrollY: true
      })
      // this.scroll.refresh();
    },

    methods: {
      getAllRecordList(n) {
        let data = {
          // date: `${this.nowYear}-${this.sun(this.nowMonth)}-${this.sun(this.nowDay)}`,
          date: `2019-09-28`,
          page: n
        }
        this.$http.getAllRecord(data).then((res) => {
          if(res.code == 200) {
            this.allRecordList = res.data.list
          }
        })
      },

      sun(number) {
        if(number < 10) {
          return `0${number}`
        }else{
          return number
        }
      },

      //计算每月星期几
      createDay(year,month,day,dayLen) {
        let l = ["周日","周一","周二","周三","周四","周五","周六"];
        let d = new Date(year,month,0);
        let dayNum = d.getDate()
        this.week = []
        for(let i = 1; i <= dayLen; i++) {
          this.week.push({
            weekday: l[new Date(`${year}-${month}-${i}`).getDay()],
            numDay: i
          })
        }
        if(this.scroll) {
          this.scroll.refresh();
        }
      },
      //创建时间
      createdTime() {
        for(let i = 8; i < 19; i ++) {
          this.timeArr.push({
            time:  `${i}:00`
          })
        }
      },
      fn(index) {
        this.activeNum = index + 1
      },
      showpopup(){
        if(!this.show){
          this.show = true;
        }else{
          this.show = false;
        }
      },
      cancel(val) {
        this.show = false
      },
      confirm(val) {
        let data = new Date(val);
        this.nowYear = data.getFullYear()
        this.nowMonth = data.getMonth() + 1
        this.show = false
        this.dataLen = new Date(this.nowYear,this.nowMonth,0).getDate();
        this.createDay(this.nowYear,this.nowMonth,this.nowDay, this.dataLen)
        this.$nextTick(() => {
          let width = 0
          for(let i = 0; i<this.dataLen; i++){
            console.log(this.$refs.item[i].clientWidth)
            width+=this.$refs.item[i].clientWidth
          }
          this.$refs.wrapperItem.style.width = width + 'px';
          this.scroll.refresh();
        })
      },

      //会议室预约详情
      getRecordDetail(id) {
        console.log('会议室id',id)
        this.$router.push({
          path:`/appointment/${id}`
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .main{
    .bSorll{
      position: fixed;
      overflow: hidden;
      top: 128px;
      left: 0;
      right: 0;
      bottom: 98px;
    }
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
      .conference{
        color: #333333;
        font-size: 38px;
        font-family:PingFang SC;
        font-weight:500;
      }
    }
    /*padding-bottom: 98px;*/
    background: #f0f2fa;
    .main-top{
      background: #fff;
      .time{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 690px;
        height: 80px;
        margin: 0 30px;
        background:rgba(240,242,250,1);
        border-radius:8px;
        .timeImg{
          width: 32px;
          height: 32px;
        }
        .selestImg{
          width: 26px;
          height: 26px;
        }
        .date{
          display: block;
          margin: 0 20px;
          color:#333333;
          font-size: 32px;
          font-family:PingFang SC;
          font-weight:400;
        }
      }
      .time-select{
        width: 100%;
        height: 136px;
        box-sizing: border-box;
        padding: 30px 0;
        margin-bottom: 20px;
        background: #fff;
        white-space: nowrap;
        overflow: hidden;
        .wrapperItem{
          height: 100%;
          width: 900px;
          font-size: 0;
          .item{
            display: inline-block;
            width: 110px;
            height: 100%;
            .txt{
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              span{
                color: #565969;
                font-size: 26px;
              }
              .active{
                display: block;
                height: 52px;
                width: 52px;
                line-height: 52px;
                text-align: center;
                background:rgba(62,94,255,1);
                border-radius:50%;
                color: #fff !important;
              }
            }
          }
        }
      }
    }
    .conference-room{
      width: 100%;
      .room-list{
        width: 100%;
        height: 416px;
        box-sizing: border-box;
        padding: 30px 30px 40px 30px;
        background: #fff;
        margin-bottom: 20px;
        .room-top{
          display: flex;
          justify-content: space-between;
          .img{
            width:220px;
            height:160px;
            overflow: hidden;
            border-radius:10px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .room-name{
            flex: 1;
            margin: 10px 0 0 30px;
            font-size: 0;
            .title{
              color: #333333;
              font-size: 32px;
              font-family:PingFang SC;
              font-weight:500;
              margin-bottom: 18px;
            }
            .inr{
              color: #666666;
              font-size: 28px;
              font-family:PingFang SC;
              font-weight:400;
            }
          }
          .btn{
            width:128px;
            height:52px;
            margin-top: 10px;
            text-align: center;
            line-height: 52px;
            background:rgba(62,94,255,1);
            box-shadow:0px 3px 15px 0px rgba(98,124,255,0.4);
            border-radius:26px;
            font-size: 0;
            span{
              font-size:28px;
              font-family:PingFang SC;
              font-weight:400;
              color:rgba(255,255,255,1);
            }
          }
        }
        .room-bto{
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
          width: 100%;
          .duration{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 52px;
            height: 136px;
            font-size: 0;
            span{
              color: #666666;
              font-size: 18px;
            }
            .duration-time{
              width:52px;
              height:100px;
              background:rgba(237,239,247,1);
              border-radius:6px;
            }
          }
        }
      }
    }
  }
</style>
