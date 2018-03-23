<script>
  export default {
    created () {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
    }
  }
</script>

<style>
  @import "../static/css/index.css";

  .text-center {
    text-align: center;
  }

  .weui-cell__bd {
    font-size: 12px;
  }

  .container, .page {
    position: inherit !important;
  }

  .weui-search-bar__cancel-btn {
    font-size: 14px !important;
    line-height: 36px !important;
  }

  .weui-search-bar__box .weui-icon-clear, .weui-search-bar__box .weui-icon-search {
    line-height: 36px !important;
  }

  .weui-search-bar_focusing .weui-search-bar__box .weui-search-bar__input {
    line-height: 36px !important;
    height: 36px !important;
    padding: 0 !important;
  }
  .weui-cells__title.text-center {
    margin-bottom: .77em;
  }

  .weui-cells {
    border-bottom: 0.5px solid #e4e4e4;
  }
  .figure {
    width: 20px;
    height: 20px;
  }

  .p_zs {
    font-size: 12px;
    padding: 0 15px;
  }

  .p_list {
    padding: 15px 0;
    border-top: 0.5px solid #e4e4e4;
  }
</style>
