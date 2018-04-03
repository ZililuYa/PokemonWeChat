<template>
  <div class="container" id="container">
    <div class="page home js_show page__tab">
      <div class="weui-article">
        <div class="weui-cells__title text-center">更新日志</div>
        <section>
          <section :key="k" v-for="(i, k) in logs">
            <h2>『{{i.v}}』</h2>
            <p style="font-size: 12px">
              {{i.c}}
            </p>
            <hr/>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logs: [{
          v: '2.3',
          c: '添加了宝可梦升级技能和CD技能一览，而且实现技能特效互通跳转'
        }, {
          v: '2.2',
          c: '实现了宝可梦资料详情页，招式详情页，特性列表页，特性详情页'
        }, {
          v: '2.1',
          c: '重构了布局，优化了宝可梦数据，添加了搜索功能，添加了菜单功能（特性，道具，属性相克，性格，能力计算器，系统）'
        }, {
          v: '2.0',
          c: '2018年3月16日，第一次提交'
        }]
      }
    },
    created () {
    }
  }
</script>

<style></style>
