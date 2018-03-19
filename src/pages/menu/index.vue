<template>
  <div class="container" id="container">
    <div class="page list js_show">
      <div class="page__bd">
        <div class="weui-cells__title">精灵宝可梦</div>
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" @click="noOpen">
            <div class="weui-cell__hd">
              <span class="sprite-icon sprite-icon-377"></span>
            </div>
            <div class="weui-cell__bd">
              <p>特性</p>
            </div>
            <div class="weui-cell__ft">
            </div>
          </a>
          <a class="weui-cell weui-cell_access" @click="noOpen">
            <div class="weui-cell__hd">
              <span class="sprite-icon sprite-icon-378"></span>
            </div>
            <div class="weui-cell__bd">
              <p>道具</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="/pages/restraint/restraint">
            <div class="weui-cell__hd">
              <span class="sprite-icon sprite-icon-379"></span>
            </div>
            <div class="weui-cell__bd">
              <p>属性相克</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="/pages/character/character">
            <div class="weui-cell__hd">
              <span class="sprite-icon sprite-icon-380"></span>
            </div>
            <div class="weui-cell__bd">
              <p>性格</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
          <a class="weui-cell weui-cell_access" @click="noOpen">
            <div class="weui-cell__hd">
              <span class="sprite-icon sprite-icon-381"></span>
            </div>
            <div class="weui-cell__bd">
              <p>能力计算器</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
        <div class="weui-cells__title">系统</div>
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="/pages/logs/logs">
            <div class="weui-cell__hd">
              <span class="sprite-icon sprite-icon-249"></span>
            </div>
            <div class="weui-cell__bd">
              <p>更新日志</p>
            </div>
            <div class="weui-cell__ft">
            </div>
          </a>
          <a class="weui-cell weui-cell_access" href="/pages/about/about">
            <div class="weui-cell__hd">
              <span class="sprite-icon sprite-icon-250"></span>
            </div>
            <div class="weui-cell__bd">
              <p>关于</p>
            </div>
            <div class="weui-cell__ft">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    methods: {
      noOpen () {
        wx.showToast({
          title: '开发中',
          icon: 'none',
          duration: 2000
        })
      }
    }
  }

</script>
<style>
</style>
