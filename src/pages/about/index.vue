<template>
  <div class="container" id="container">
    <div class="page home js_show page__tab">
      <div class="userinfo" @click="bindViewTap">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
      </div>
      <div class="weui-cells__title">
        关于
      </div>
      <div class="weui-cells p_list">
        <p class="p_zs">
          这里是有关精灵宝可梦的百科全书，我们为了像大家一样的宝可梦爱好者们而聚集在一起，为了再现一个真实的宝可梦世界而努力。
        </p>
      </div>
      <div class="weui-cells__title">
        错误及意见提交微信联系人
      </div>
      <div class="weui-cells p_list">
        <p class="p_zs">
          15201618692
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    data () {
      return {
        userInfo: {}
      }
    },
    mounted () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    },
    methods: {
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      }
    }
  }

</script>
<style>
  .userinfo-avatar {
    width: 30vw;
    height: 30vw;
    margin-top: 20px;
    border-radius: 50%;
  }
  .userinfo {
    text-align: center;
  }
</style>
