<template>
  <div class="weui-tabbar">
    <a href="/pages/poke/poke" :class="'weui-tabbar__item     '+on1">
                    <span style="display: inline-block;position: relative;">
                        <span class="sprite-icon sprite-icon-000"></span>
                    </span>
      <p class="weui-tabbar__label">精灵</p>
    </a>
    <a href="/pages/skill/skill" :class="'weui-tabbar__item     '+on2">
                    <span style="display: inline-block;position: relative;">
                        <span class="sprite-icon sprite-icon-250"></span>
                    </span>
      <p class="weui-tabbar__label">招式</p>
    </a>
    <!--<a href="javascript:;" :class="'weui-tabbar__item     '+on3">-->
                    <!--<span style="display: inline-block;position: relative;">-->
                        <!--<span class="sprite-icon sprite-icon-500"></span>-->
                    <!--</span>-->
      <!--<p class="weui-tabbar__label">特性</p>-->
    <!--</a>-->
    <a :class="'weui-tabbar__item     '+on4">
                    <span style="display: inline-block;position: relative;">
                        <span class="sprite-icon sprite-icon-750"></span>
                    </span>
      <p class="weui-tabbar__label">性格</p>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['text'],
    data () { // 加上data props就失效
      return {
        abc: this.text,
        on1: this.text === 1 ? 'weui-bar__item_on' : '',
        on2: this.text === 2 ? 'weui-bar__item_on' : '',
        on3: this.text === 3 ? 'weui-bar__item_on' : '',
        on4: this.text === 4 ? 'weui-bar__item_on' : ''
      }
    }
  }
</script>

