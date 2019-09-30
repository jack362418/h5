<template>
  <div class="login">
    <div class="head">
      <span class="conference"> 预约会议室 </span>
    </div>
    <div class="img">
      <img src="../../assets/loginBei.png" alt="">
    </div>
    <div class="content">
      <p> 会议室预约系统 </p>
      <div class="ipt">
        <input type="text" placeholder="请输入用户名" v-model="loginForm.loginName">
        <img src="../../assets/shouji.png" alt="">
      </div>
      <div class="ipt">
        <input type="password" placeholder="请输入密码" v-model="loginForm.password">
        <img src="../../assets/mima.png" alt="">
      </div>
      <div class="btn" @click="login">
        <span> 立即登录 </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          loginName: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch('Login', this.loginForm)
          .then((res) => {
            console.log('dfadsf',res.code)
            this.loading = false
            if(res.code == 200 || res.code == 0) {
              // this.$store.dispatch('Roles', this.loginForm)
              this.$router.push({ path: '/' })
            }
          }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped lang="less">
.login{
  width: 100%;
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
  .img{
    width: 100%;
    height: 360px;
    img{
      width: 100%;
      height: 360px;
    }
  }
  .content{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 876px;
    border-radius:30px 30px 0px 0px;
    background: #fff;
    text-align: center;
    z-index: 11;
    p{
      padding: 40px 0 15px 0;
      font-size:40px;
      font-family:PingFang SC;
      font-weight:500;
      color:rgba(51,51,51,1);
    }
    .ipt{
      position: relative;
      width: 600px;
      height: 88px;
      margin: 40px auto;
      img{
        position: absolute;
        top: 23px;
        left: 30px;
        width: 42px;
        height: 42px;
      }
      input{
        width: 100%;
        height: 100%;
        padding-left: 96px;
        box-sizing: border-box;
        border:3px solid rgba(221, 221, 221, 1);
        border-radius:44px;
        font-size: 32px;
      }
      input::placeholder{
        font-size: 32px;
        line-height: 88px;
      }
    }
    .btn{
      width: 600px;
      height: 88px;
      line-height: 88px;
      background:rgba(62,94,255,1);
      box-shadow:0px 3px 15px 0px rgba(98,124,255,0.4);
      border-radius:44px;
      margin: 0 auto;
      font-size: 0;
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
