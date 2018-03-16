<template>
  <div class="container" id="container" @click="clickHandle('test click', $event)">
    <div class="" style="display:none">
      <div class="userinfo" style="display: none" @click="bindViewTap">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
        <div class="userinfo-nickname">
          <card :text="userInfo.nickName"></card>
        </div>
      </div>
      <div class="usermotto" style="display: none">
        <div class="user-motto">
          <card :text="motto"></card>
        </div>
      </div>
      <p style="display: none">
        <button @click="sao">扫一扫</button>
      </p>
      <form class="form-container" style="display: none">
        <input type="text" class="form-control" v-model="motto" placeholder="v-model"/>
        <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>
      </form>
    </div>
    <div class="page button home js_show">
      <div class="page__bd text-center">
        <div class="page__hd">
          <p class="text-center">
            <span class="sprite-icon sprite-icon-004"></span>
          </p>
          <a class="home">宝可梦图鉴</a>
        </div>
        <a href="/pages/poke/poke" class="weui-btn weui-btn_primary">进入</a>
      </div>
    </div>
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        motto: 'Hello World1',
        userInfo: {},
        latitude: 0,
        longitude: 0
      }
    },
    components: {
      card
    },
    methods: {
      sao () {
        wx.scanCode({
          success: (res) => {
            console.log(res)
          }
        })
      },
      bindViewTap () {
        const url = '../logs/logs'
        wx.navigateTo({url})
      },
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
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    mounted () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          this.latitude = res.latitude // 经度
          this.longitude = res.longitude // 纬度
        }
      })
    }
  }
</script>

<style>
</style>
