<template>
  <div class="container" id="container">
    <div class="page home js_show page__tab" v-if="data">
      <div class="weui-cells times text-center">
        <img :src="imgUrl" class="imagePoS" alt="">
      </div>
      <!-- 名称 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>名称</p>
            </span>
          <div>
            <span class="weui-cell__bd">#{{poke.id}} - {{poke.name}}</span>
          </div>
        </a>
      </div>

      <div class="weui-cells__title">特性描述</div>

      <div class="weui-cells p_list">
        <p class="p_zs">
          {{data.describe}}
        </p>
      </div>
      <div class="weui-cells__title">特性效果</div>

      <div class="weui-cells p_list">
        <p class="p_zs" :key="k" v-for="(i, k) in data.additional">
          {{i}}
        </p>
      </div>
      <div class="weui-cells__title">具有该特性的宝可梦</div>
      <div class="weui-cells">
        <tab :i="i-1" :list="list[i-1]" :key="k" v-for="(i, k) in data.arr"></tab>
      </div>
    </div>
    <div class="page home js_show  page__tab" v-if="!data">
      <div class="page__bd">
        <div class="weui-cells__title text-center">{{info}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { api } from '../../utils/index'
  import tab from '@/components/tab.vue'

  export default {
    data () {
      return {
        id: undefined,
        poke: {},
        data: false,
        info: '加载中请稍后···',
        imgUrl: '',
        list: this.$list.rows,
        api
      }
    },
    components: {tab},
    methods: {
      init () {
        this.data = false
        this.id = this.$root.$mp.query.id
        this.poke = this.$features.rows[this.id - 1]
        let uid = this.poke.id.trim()
        if (uid.length === 1) {
          uid = '00' + uid
        }
        if (uid.length === 2) {
          uid = '0' + uid
        }
        let i = parseInt(Math.random() * 155)
        if (i.length === 1) i = '00' + i
        if (i.length === 2) i = '0' + i
//        this.imgUrl = `https://s1.52poke.wiki/assets/sprite/b2w2/trainer/${i}.gif`
        this.imgUrl = `http://www.pokemon.name/w/images/8/80/Trainer_VS_BW_Cheren.png`
        let vm = this
        wx.request({
          url: api + '/api/features',
          data: {
            name: this.poke.name,
            id: uid
          },
          method: 'POST',
          success: function (data) {
            if (data.data.code) {
              vm.data = data.data.data
//              vm.data.imgUrl = 'https:' + vm.data.imgUrl
            }
          },
          fail: function () {
            vm.info = '服务器异常，请返回'
          }
        })
      }
    },
    mounted () {
      this.init()
    }
  }

</script>
<style>
  .imagePoS {
    width: 40vw;
    height: 20vw;
    margin-top: 10px;
  }
</style>
