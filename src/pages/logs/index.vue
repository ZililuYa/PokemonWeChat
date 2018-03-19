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
