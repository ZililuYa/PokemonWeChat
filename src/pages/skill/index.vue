<template>
  <div class="container" id="container">
    <div class="page home js_show  page__tab">
      <div class="page__bd">
        <div :class="'weui-search-bar   '+search" id="searchBar">
          <form class="weui-search-bar__form" @click="openSearch">
            <div class="weui-search-bar__box">
              <i class="weui-icon-search"></i>
              <input @confirm="runSearch" v-model="value" :focus="focus" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
              <a @click="value=''" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
              <i class="weui-icon-search"></i>
              <span>搜索</span>
            </label>
          </form>
          <a @click="closeSearch" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
        <div class="weui-cells" v-if="arrIf">
          <a class="weui-cell weui-cell_access" :key="k" v-for="(i, k) in arr" :href="'/pages/skillDetail/skillDetail?id='+list[i].id">
            <div class="weui-cell__bd">
              <p><span class="skill_id">{{ list[i].id }}</span> {{list[i].name}}</p>
            </div>
            <div class="">
              <attribute :text="list[i].wl + '/' + list[i].mz+ '/'+list[i].pp" :cName="'attribute-sx9 width-max'"></attribute>
              <attribute :text="list[i].sx"></attribute>
              <attribute :text="list[i].fl"></attribute>
            </div>
          </a>
        </div>
        <div class="weui-cells__title text-center" v-show="loading">内容加载中···</div>
        <div class="weui-cells__title text-center" v-show="!loading">已经全部加载</div>
      </div>
    </div>
    <!--<tab :text="2"></tab>-->
  </div>
</template>

<script>
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
      for (let i = t; i < max; i++) {
        this.arr.push(i)
      }
    },
    data () {
      return {
        arrIf: true,
        focus: false,
        search: '',
        value: '',
        arr: [],
        loading: true,
        list: this.$skill.rows
      }
    },
    components: {
      attribute
    },
    computed: {},
    methods: {
      runSearch (e) {
        this.focus = false
        if (!this.value) return
        this.arrIf = false
        this.initSearch()
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
        return this.list[i].name.indexOf(value) !== -1 || this.value === ''
      },
      init () {
        this.loading = true
        this.arr = []
        for (let i = 0; i < 50; i++) {
          this.arr.push(i)
        }
      },
      initSearch () {
        this.arr = []
        for (let i = 0; i < this.list.length; i++) {
          if (this.validate(i, this.value)) this.arr.push(i)
        }
        let vm = this
        setTimeout(function () {
          vm.loading = false
          vm.arrIf = true
        }, 300)
      }
    },
    mounted () {
      this.init()
    }
  }

</script>
<style>
  .skill_id {
    display: inline-block;
    width: 25px;
    text-align: left;
  }

</style>
