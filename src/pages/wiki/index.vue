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
        <a class="weui-cell weui-cell_access" :href="'/pages/featuresDetail/featuresDetail?id='+fid[0]">
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
        <a class="weui-cell weui-cell_access" :href="'/pages/featuresDetail/featuresDetail?id='+fid[1]">
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
        <a class="weui-cell weui-cell_access" :href="'/pages/featuresDetail/featuresDetail?id='+fid[data.typeArr.length - 1]">
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

      <div class="weui-cells__title">种族值</div>
      <div class="weui-cells p_list">
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p class="nl_zhi hp" v-bind:style="{width: nl1+'px'}">血量：{{nl.hp}}</p>
          </div>
          <div class="nl_zhi_zh">
            {{nlz0}}
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p class="nl_zhi gj" v-bind:style="{width: nl2+'px'}">攻击：{{nl.gj}}</p>
          </div>
          <div class="nl_zhi_zh">
            {{nlz1}}
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p class="nl_zhi fy" v-bind:style="{width: nl3+'px'}">防御：{{nl.fy}}</p>
          </div>
          <div class="nl_zhi_zh">
            {{nlz2}}
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p class="nl_zhi tg" v-bind:style="{width: nl4+'px'}">特攻：{{nl.tg}}</p>
          </div>
          <div class="nl_zhi_zh">
            {{nlz3}}
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p class="nl_zhi tf" v-bind:style="{width: nl5+'px'}">特防：{{nl.tf}}</p>
          </div>
          <div class="nl_zhi_zh">
            {{nlz4}}
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p class="nl_zhi sd" v-bind:style="{width: nl6+'px'}">速度：{{nl.sd}}</p>
          </div>
          <div class="nl_zhi_zh">
            {{nlz5}}
          </div>
        </a>
        <a class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>总和：{{nl.zh}}</p>
          </div>
        </a>
      </div>


      <div class="weui-cells__title">可学会的招式</div>
      <div class="weui-cells p_list">
        <a class="weui-cell weui-cell_access" :key="k" v-for="(i, k) in arr" :href="'/pages/skillDetail/skillDetail?id='+list[i.sid].id">
          <div class="weui-cell__bd">
            <p><span class="skill_age">{{ i.age }}</span> {{list[i.sid].name}}</p>
          </div>
          <div class="">
            <!--<attribute :text="list[i].wl + '/' + list[i].mz+ '/'+list[i].pp" :cName="'attribute-sx9 width-max'"></attribute>-->
            <attribute :text="list[i.sid].sx"></attribute>
            <attribute :text="list[i.sid].fl"></attribute>
          </div>
        </a>
      </div>
      <div class="weui-cells__title">能使用的招式学习器</div>
      <div class="weui-cells p_list">
        <a class="weui-cell weui-cell_access" :key="k" v-for="(i, k) in cd" :href="'/pages/skillDetail/skillDetail?id='+list[i.sid].id">
          <div class="weui-cell__bd">
            <p><span class="skill_age">{{ list[i.sid].id }}</span> {{list[i.sid].name}}</p>
          </div>
          <div class="">
            <!--<attribute :text="list[i].wl + '/' + list[i].mz+ '/'+list[i].pp" :cName="'attribute-sx9 width-max'"></attribute>-->
            <attribute :text="list[i.sid].sx"></attribute>
            <attribute :text="list[i.sid].fl"></attribute>
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
    onLoad () {
      this.data = false
    },
    data () {
      return {
        arr: [],
        cd: [],
        id: undefined,
        poke: {},
        nl: {},
        nl1: '',
        nl2: '',
        nl3: '',
        nl4: '',
        nl5: '',
        nl6: '',
        nlz0: '',
        nlz1: '',
        nlz2: '',
        nlz3: '',
        nlz4: '',
        nlz5: '',
        data: false,
        info: '加载中请稍后···',
        imgUrl: '',
        fid: [],
        list: this.$skill.rows,
        features: this.$features.rows,
        api
      }
    },
    components: {attribute},
    methods: {
      getMax (zz) {
        return Math.ceil(((zz * 2 + 252 / 4 + 31) * 100 / 100 + 5) * 1.1) - 1
      },
      getMin (zz) {
        return Math.ceil(((zz * 2) * 100 / 100 + 5) * 0.9) - 1
      },
      getHpMax (zz) {
        return Math.ceil((zz * 2 + 252 / 4 + 31) + 100 + 10)
      },
      getHpMin (zz) {
        return Math.ceil((zz * 2) + 100 + 10)
      },
      init () {
        this.id = this.$root.$mp.query.id
        this.poke = this.$list.rows[this.id]
        this.nl = this.$nl.rows[this.id]
        this.nl1 = parseInt(this.nl.hp) / 2 + 60
        this.nl2 = parseInt(this.nl.gj) / 2 + 60
        this.nl3 = parseInt(this.nl.fy) / 2 + 60
        this.nl4 = parseInt(this.nl.tg) / 2 + 60
        this.nl5 = parseInt(this.nl.tf) / 2 + 60
        this.nl6 = parseInt(this.nl.sd) / 2 + 60
        this.nlz0 = this.getHpMin(this.nl.hp) + ' - ' + this.getHpMax(this.nl.hp)
        this.nlz1 = this.getMin(this.nl.gj) + ' - ' + this.getMax(this.nl.gj)
        this.nlz2 = this.getMin(this.nl.fy) + ' - ' + this.getMax(this.nl.fy)
        this.nlz3 = this.getMin(this.nl.tg) + ' - ' + this.getMax(this.nl.tg)
        this.nlz4 = this.getMin(this.nl.tf) + ' - ' + this.getMax(this.nl.tf)
        this.nlz5 = this.getMin(this.nl.sd) + ' - ' + this.getMax(this.nl.sd)
        let uid = this.poke.id.toString().trim()
        if (uid === '292' || uid === 292) this.nlz0 = 1
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
              console.log(data.data)
              vm.arr = data.data.data.skill.rows
              for (let i in vm.arr) {
                vm.arr[i].sid = parseInt(vm.arr[i].sid) - 1
              }
              vm.cd = data.data.data.skill.cd
              for (let t in vm.cd) {
                vm.cd[t].sid = parseInt(vm.cd[t].sid) - 1
              }
              vm.fid = []
              for (let x in vm.data.typeArr) {
                let f = vm.data.typeArr[x]
                vm.fid.push(vm.getFid(f))
              }
            }
          },
          fail: function () {
            vm.info = '服务器异常，请返回'
          }
        })
      },
      getFid (name) {
        if (!name) return ''
        for (let i in this.features) {
          if (this.features[i].name.indexOf(name) !== -1) return this.features[i].id
        }
        return ''
      }
    },
    mounted () {
      this.init()
    }
  }

</script>
<style>
  .nl_zhi_zh {
    font-size: 12px;
  }

  .nl_zhi.hp {
    background-color: #97C87A;
    border: 1px solid #558936;
  }

  .nl_zhi.gj {
    background-color: #FAE192;
    border: 1px solid #CCBC33;
  }

  .nl_zhi.fy {
    background-color: #FBB977;
    border: 1px solid #B4673D;
  }

  .nl_zhi.tg {
    background-color: #A2D4DA;
    border: 1px solid #1A7E8D;
  }

  .nl_zhi.tf {
    background-color: #89A9CD;
    border: 1px solid #004689;
  }

  .nl_zhi.sd {
    background-color: #C39CD8;
    border: 1px solid #3C2957;
  }

  .imagePo {
    width: 50vw;
    height: 50vw;
    margin-top: 10px;
  }
</style>
