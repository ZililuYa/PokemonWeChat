<template>
  <div class="container" id="container">
    <div class="page home js_show page__tab" v-if="data">
      <div class="weui-cells times text-center">
        <img :src="imgUrl" class="imagePo" alt="">
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

      <!-- 属性 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>属性</p>
          </div>
          <div class="">
            <attribute :text="s" v-for="(s, x) in poke.sx" :key="x"></attribute>
          </div>
        </a>
      </div>

      <!-- 类型 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>分类</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.type}}</span>
          </div>
        </a>
      </div>

      <!-- 特性1 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p v-if="data.typeArr.length !== 3">特性</p>
              <p v-if="data.typeArr.length === 3">特性 1</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.typeArr[0]}}</span>
          </div>
        </a>
      </div>

      <!-- 特性2 -->
      <div class="weui-cells" v-if="data.typeArr.length === 3">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>特性 2</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.typeArr[1]}}</span>
          </div>
        </a>
      </div>

      <!-- 隐藏特性 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>隐藏特性</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.typeArr[data.typeArr.length - 1]}}</span>
          </div>
        </a>
      </div>

      <!-- 身高 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>身高</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.height}}</span>
          </div>
        </a>
      </div>


      <!-- 体重 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>体重</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.weight}}</span>
          </div>
        </a>
      </div>

      <!-- 体形 不可用 -->
      <!--<div class="weui-cells">-->
      <!--<a class="weui-cell weui-cell_access">-->
      <!--<span class="weui-cell__bd">-->
      <!--<p>体形</p>-->
      <!--</span>-->
      <!--<div>-->
      <!--<img :src="'https://forver.cc/img.png?url=http:'+data.figure" class="figure" alt="">-->
      <!--</div>-->
      <!--</a>-->
      <!--</div>-->

      <!-- 捕获率 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>捕获率</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.capture}}</span>
          </div>
        </a>
      </div>

      <!-- 性别比例 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>性别比例</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.sex}}</span>
          </div>
        </a>
      </div>

      <!-- 基础点数 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>基础点数</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.number}}</span>
          </div>
        </a>
      </div>

      <!-- 蛋组 -->
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access">
            <span class="weui-cell__bd">
              <p>蛋组</p>
            </span>
          <div>
            <span class="weui-cell__bd">{{data.egg}}</span>
          </div>
        </a>
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
        this.poke = this.$list.rows[this.id]
        var uid = this.poke.id.toString().trim()
        this.imgUrl = `http://res.pokemon.name/common/pokemon/pgl/${uid}.00.png`
        let vm = this
        wx.request({
          url: api + '/api/poke',
          data: {
            url: this.poke.href,
            id: uid
          },
          method: 'POST',
          success: function (data) {
            if (data.data.code) {
              vm.data = data.data.data
              vm.data.imgUrl = 'https:' + vm.data.imgUrl
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
  .imagePo {
    width: 50vw;
    height: 50vw;
    margin-top: 10px;
  }
</style>
