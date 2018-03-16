<script>
  export default {
    created () {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
      console.log('app created and cache logs by setStorageSync')
    }
  }
</script>

<style>
  @import "../static/css/index.css";

  .text-center {
    text-align: center;
  }

  /*.page__tab {*/
  /*padding-bottom: 60px;*/
  /*}*/
  .weui-cell__bd {
    font-size: 12px;
  }
</style>
