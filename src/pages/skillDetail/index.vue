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

      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>属性</p>
          </div>
          <div class="">
            <attribute :text="poke.sx"></attribute>
          </div>
        </a>
      </div>

      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>分类</p>
          </div>
          <div class="">
            <attribute :text="poke.fl"></attribute>
          </div>
        </a>
      </div>

      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>PP</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{poke.pp}}</span>
          </div>
        </a>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>威力</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{poke.wl}}</span>
          </div>
        </a>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>命中</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{poke.mz}}</span>
          </div>
        </a>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>作用范围</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.range}}</span>
          </div>
        </a>
      </div>

      <div class="weui-cells__title">招式描述</div>

      <div class="weui-cells p_list">
        <p class="p_zs" :key="k" v-for="(i, k) in data.describe">
          {{i}}
        </p>
      </div>
      <div class="weui-cells__title">招式附加效果</div>

      <div class="weui-cells p_list">
        <p class="p_zs" :key="k" v-for="(i, k) in data.additional">
          {{i}}
        </p>
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
  import attribute from '@/components/attribute.vue'

  export default {
    data () {
      return {
        id: undefined,
        poke: {},
        data: false,
        info: '加载中请稍后···',
        imgUrl: '',
        api
      }
    },
    components: {attribute},
    methods: {
      init () {
        this.data = false
        this.id = this.$root.$mp.query.id
        this.poke = this.$skill.rows[this.id - 1]
        let uid = this.poke.id.trim()
        if (uid.length === 1) {
          uid = '00' + uid
        }
        if (uid.length === 2) {
          uid = '0' + uid
        }
        this.imgUrl = `https://s1.52poke.wiki/assets/animoves/AniMove${uid}.gif`
        let vm = this
        wx.request({
          url: api + '/api/skill',
          data: {
            url: this.poke.href,
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
    width: 80vw;
    height: 60vw;
    margin-top: 10px;
  }
</style>
