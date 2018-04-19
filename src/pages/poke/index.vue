<template>
  <div class="container" id="container">
    <div class="page home js_show  page__tab">
      <div class="page__bd">
        <div :class="'weui-search-bar   '+search" id="searchBar">
          <form class="weui-search-bar__form" @click="openSearch">
            <div class="weui-search-bar__box">
              <i class="weui-icon-search"></i>
              <input @confirm="runSearch" v-model="value" :focus="focus" confirm-type="search" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
              <a @click="value=''" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
              <i class="weui-icon-search"></i>
              <span>搜索</span>
            </label>
          </form>
          <a @click="closeSearch" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
        <div class="weui-cells__title text-center" v-show="!times1.length&&!times2.length&&!times3.length&&!times4.length&&!times5.length&&!times6.length&&!times7.length">没有相关的数据</div>
        <div v-if="!loading">
          <div class="weui-cells times" @click="opens('timesShow1')" v-if="times1.length">
            <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p> <span class="sprite-icon sprite-icon-003"></span> 第一世代</p>
            </span>
              <div :class="'weui-cell__ft    ' + timesShow1"></div>
            </a>
          </div>
          <div class="weui-cells" v-if="timesShow1">
            <tab :i="i" :list="list[i]" :key="k" v-for="(i, k) in times1"></tab>
          </div>
          <div class="weui-cells times" @click="opens('timesShow2')" v-if="times2.length">
            <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p> <span class="sprite-icon sprite-icon-154"></span> 第二世代</p>
            </span>
              <div :class="'weui-cell__ft    ' + timesShow2"></div>
            </a>
          </div>
          <div class="weui-cells" v-if="timesShow2">
            <tab :i="i" :list="list[i]" :key="k" v-for="(i, k) in times2"></tab>
          </div>
          <div class="weui-cells times" @click="opens('timesShow3')" v-if="times3.length">
            <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p> <span class="sprite-icon sprite-icon-254"></span> 第三世代</p>
            </span>
              <div :class="'weui-cell__ft    ' + timesShow3"></div>
            </a>
          </div>
          <div class="weui-cells" v-if="timesShow3">
            <tab :i="i" :list="list[i]" :key="k" v-for="(i, k) in times3"></tab>
          </div>
          <div class="weui-cells times" @click="opens('timesShow4')" v-if="times4.length">
            <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p> <span class="sprite-icon sprite-icon-389"></span> 第四世代</p>
            </span>
              <div :class="'weui-cell__ft    ' + timesShow4"></div>
            </a>
          </div>
          <div class="weui-cells" v-if="timesShow4">
            <tab :i="i" :list="list[i]" :key="k" v-for="(i, k) in times4"></tab>
          </div>
          <div class="weui-cells times" @click="opens('timesShow5')" v-if="times5.length">
            <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p> <span class="sprite-icon sprite-icon-497"></span> 第五世代</p>
            </span>
              <div :class="'weui-cell__ft    ' + timesShow5"></div>
            </a>
          </div>
          <div class="weui-cells" v-if="timesShow5">
            <tab :i="i" :list="list[i]" :key="k" v-for="(i, k) in times5"></tab>
          </div>
          <div class="weui-cells times" @click="opens('timesShow6')" v-if="times6.length">
            <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p> <span class="sprite-icon sprite-icon-652"></span> 第六世代</p>
            </span>
              <div :class="'weui-cell__ft    ' + timesShow6"></div>
            </a>
          </div>
          <div class="weui-cells" v-if="timesShow6">
            <tab :i="i" :list="list[i]" :key="k" v-for="(i, k) in times6"></tab>
          </div>
          <div class="weui-cells times" @click="opens('timesShow7')" v-if="times7.length">
            <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p> <span class="sprite-icon sprite-icon-724"></span> 第七世代</p>
            </span>
              <div :class="'weui-cell__ft    ' + timesShow7"></div>
            </a>
          </div>
          <div class="weui-cells" v-if="timesShow7">
            <tab :i="i" :list="list[i]" :key="k" v-for="(i, k) in times7"></tab>
          </div>
        </div>
        <div class="weui-cells__title text-center" v-show="loading">内容加载中···</div>
      </div>
    </div>
  </div>
</template>

<script>
  // Use Vuex
  import tab from '@/components/tab.vue'

  export default {
    data () {
      return {
        focus: false,
        search: '',
        loading: false,
        timesShow1: false,
        timesShow2: false,
        timesShow3: false,
        timesShow4: false,
        timesShow5: false,
        timesShow6: false,
        timesShow7: false,
        times1: [],
        times2: [],
        times3: [],
        times4: [],
        times5: [],
        times6: [],
        times7: [],
        itemOn: 1,
        list: this.$list.rows,
        value: ''
      }
    },
    components: {
      tab
    },
    computed: {},
    methods: {
      runSearch (e) {
        this.focus = false
        if (!this.value) return
        this.loading = true
        this.init()
      },
      closeSearch () {
        this.focus = false
        this.search = ''
        this.value = ''
        this.init()
      },
      openSearch () {
        if (!this.search) {
          this.search = 'weui-search-bar_focusing'
          this.focus = true
        } else {
          this.focus = !this.focus
        }
      },
      validate (i, value) {
        return this.list[i].name.indexOf(value) !== -1 || JSON.stringify(this.list[i].sx).indexOf(value) !== -1 || this.value === ''
      },
      init () {
        this.times1 = []
        for (let i = 0; i <= 150; i++) {
          if (this.validate(i, this.value)) this.times1.push(i)
        }
        this.times2 = []
        for (let i = 151; i <= 250; i++) {
          if (this.validate(i, this.value)) this.times2.push(i)
        }
        this.times3 = []
        for (let i = 251; i <= 385; i++) {
          if (this.validate(i, this.value)) this.times3.push(i)
        }
        this.times4 = []
        for (let i = 386; i <= 492; i++) {
          if (this.validate(i, this.value)) this.times4.push(i)
        }
        this.times5 = []
        for (let i = 493; i <= 648; i++) {
          if (this.validate(i, this.value)) this.times5.push(i)
        }
        this.times6 = []
        for (let i = 649; i <= 720; i++) {
          if (this.validate(i, this.value)) this.times6.push(i)
        }
        this.times7 = []
        for (let i = 721; i <= 806; i++) {
          if (this.validate(i, this.value)) this.times7.push(i)
        }
        let vm = this
        setTimeout(function () {
          vm.loading = false
        }, 300)
      },
      opens (name) {
        if (name !== 'timesShow1') this.timesShow1 = false
        if (name !== 'timesShow2') this.timesShow2 = false
        if (name !== 'timesShow3') this.timesShow3 = false
        if (name !== 'timesShow4') this.timesShow4 = false
        if (name !== 'timesShow5') this.timesShow5 = false
        if (name !== 'timesShow6') this.timesShow6 = false
        if (name !== 'timesShow7') this.timesShow7 = false
        this[name] === 'open' ? this[name] = false : this[name] = 'open'
      }
    },
    mounted () {
      this.init()
    }
  }

</script>
<style>

  .times {

  }

  .weui-cell_access .weui-cell__ft:after {
    transition-duration: 0.3s;
  }

  .weui-cell_access .weui-cell__ft.open:after {
    transform: rotate(135deg);
  }
</style>
