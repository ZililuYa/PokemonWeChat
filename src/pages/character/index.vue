<template>
  <div class="container" id="container">
    <div class="page home js_show  page__tab">
      <div class="page__bd">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" v-for="(i, k) in data">
            <div class="weui-cell__bd">
              <p> {{i.name}}</p>
            </div>
            <div class="" v-if="i.x">
              <attribute :text="i.x" :cName="color2"></attribute>
              <attribute :text="i.y" :cName="color3"></attribute>
              <!--<attribute :text="i.y"></attribute>-->
            </div>
            <div class="" v-if="!i.x">
              <attribute :text="'无变化'" :cName="color1"></attribute>
              <attribute :text="'无变化'" :cName="color1"></attribute>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import attribute from '@/components/attribute.vue'

  export default {
    data () {
      return {
        color1: 'attribute-sx21',
        color2: 'attribute-sx20',
        color3: 'attribute-sx19',
        data: [{
          name: '怕寂寞',
          x: '加攻击',
          y: '减防御'
        }, {
          name: '勇敢',
          x: '加攻击',
          y: '减速度'
        }, {
          name: '固执',
          x: '加攻击',
          y: '减特攻'
        }, {
          name: '顽皮',
          x: '加攻击',
          y: '减特防'
        }, {
          name: '大胆',
          x: '加防御',
          y: '减攻击'
        }, {
          name: '悠闲',
          x: '加防御',
          y: '减速度'
        }, {
          name: '淘气',
          x: '加防御',
          y: '减特攻'
        }, {
          name: '乐天',
          x: '加防御',
          y: '减特防'
        }, {
          name: '胆小',
          x: '加速度',
          y: '减攻击'
        }, {
          name: '急躁',
          x: '加速度',
          y: '减防御'
        }, {
          name: '爽朗',
          x: '加速度',
          y: '减特攻'
        }, {
          name: '天真',
          x: '加速度',
          y: '减特防'
        }, {
          name: '内敛',
          x: '加特攻',
          y: '减攻击'
        }, {
          name: '慢吞吞',
          x: '加特攻',
          y: '减防御'
        }, {
          name: '冷静',
          x: '加特攻',
          y: '减速度'
        }, {
          name: '马虎',
          x: '加特攻',
          y: '减特防'
        }, {
          name: '温和',
          x: '加特防',
          y: '减攻击'
        }, {
          name: '温顺',
          x: '加特防',
          y: '减防御'
        }, {
          name: '自大',
          x: '加特防',
          y: '减速度'
        }, {
          name: '慎重',
          x: '加特防',
          y: '减特攻'
        }, {
          name: '勤奋'
        }, {
          name: '坦率'
        }, {
          name: '认真'
        }, {
          name: '害羞'
        }, {
          name: '浮躁'
        }]
      }
    },
    components: {
//      tab,
      attribute
    },
    computed: {},
    methods: {}
  }

</script>
<style>
</style>
