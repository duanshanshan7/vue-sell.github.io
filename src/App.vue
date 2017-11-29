<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="./assets/logo.png">
      </div>
      <div class="tab border-1px">
        <div class="tab-item active">
          <router-link to="/things">发现</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/goods">购买</router-link>
        </div>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      // things:{}
    }
  }
  
}
</script>

<style lang="scss">
  .header{
    height: 40px;
    .logo{
      position: absolute;
      top:0px;
      left: 20px;
      img{
        width:30px;
      }
      
    }
    .tab{
      width:50%;
      margin-left: 25%;
      display: flex;
      margin-bottom: 10px;
      .tab-item{
        flex:1;
        height: 30px;
        line-height: 30px;
        text-align: center;
        & > a{
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
        }
      }
      .router-link-active{
        color: #f74048!important;
        border-bottom:1px #f74048 solid!important;
        font-weight: bold!important;
      }
    }
  }
</style>
