<template>
  <div class="container" id="container">
    <div class="page home js_show  page__tab">
      <div class="page__bd">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" :key="k" v-for="(i, k) in arr">
            <div class="weui-cell__bd">
              <p>#{{ list[k].id }}<span :class="'sprite-icon   sprite-icon-' + list[k].id"></span> {{list[k].name}}</p>
            </div>
            <div class="">
              <attribute :text="s" v-for="(s, x) in list[k].sx" :key="x"></attribute>
            </div>
          </a>
        </div>
        <div class="weui-cells__title text-center" v-show="loading">内容加载中···</div>
      </div>
    </div>
  </div>
</template>

<script>
  // Use Vuex
  //  import tab from '@/components/tab.vue'
  import attribute from '@/components/attribute.vue'

  export default {
    onReachBottom () {
      if (!this.loading) return
      let t = this.arr.length
      let max = 0
      if (t + 50 > this.list.length) {
        max = this.list.length
        this.loading = false
      }
      max = max === 0 ? t + 50 : max
      for (let i = t + 1; i <= max; i++) {
        this.arr.push(i)
      }
    },
    data () {
      return {
        loading: true,
        arr: [],
        itemOn: 1,
        list: this.$list.rows
      }
    },
    components: {
//      tab,
      attribute
    },
    computed: {},

    methods: {
      init () {
        for (let i = 1; i <= 50; i++) {
          this.arr.push(i)
        }
      }
    },
    mounted () {
      this.init()
    }
  }

</script>
<style>
  .container, .page {
    position: inherit;
  }
</style>
