<template>
  <span :class="'attribute    '+className">
    {{text}}
  </span>
</template>

<script>
  export default {
    props: ['text', 'cName'],
    data () {
      return {
        className: ''
      }
    },
    methods: {
      init () {
        var val = this.text.trim()
        if (this.cName) this.className = this.cName
        switch (val) {
          case '一般':
            this.className = 'attribute-sx1'
            break
          case '虫':
            this.className = 'attribute-sx2'
            break
          case '毒':
            this.className = 'attribute-sx3'
            break
          case '飞行':
            this.className = 'attribute-sx4'
            break
          case '地面':
            this.className = 'attribute-sx5'
            break
          case '格斗':
            this.className = 'attribute-sx6'
            break
          case '岩石':
            this.className = 'attribute-sx7'
            break
          case '龙':
            this.className = 'attribute-sx8'
            break
          case '钢':
            this.className = 'attribute-sx9'
            break
          case '火':
            this.className = 'attribute-sx10'
            break
          case '水':
            this.className = 'attribute-sx11'
            break
          case '电':
            this.className = 'attribute-sx12'
            break
          case '草':
            this.className = 'attribute-sx13'
            break
          case '冰':
            this.className = 'attribute-sx14'
            break
          case '超能力':
            this.className = 'attribute-sx15'
            break
          case '幽灵':
            this.className = 'attribute-sx16'
            break
          case '恶':
            this.className = 'attribute-sx17'
            break
          case '妖精':
            this.className = 'attribute-sx18'
            break
          case '物理':
            this.className = 'attribute-sx19'
            break
          case '特殊':
            this.className = 'attribute-sx20'
            break
          case '变化':
            this.className = 'attribute-sx21'
            break
          default:
        }
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style>
  .attribute {
    margin-left: 5px;
    color: #fff;
    font-size: 12px;
    display: inline-block;
    width: 50px;
    text-align: center;
    border-radius: 30px;
  }

  .attribute-sx1 {
    background-color: #BBBBAA;
  }

  .attribute-sx2 {
    background-color: #AABB22;
  }

  .attribute-sx3 {
    background-color: #AA5599;
  }

  .attribute-sx4 {
    background-color: #6699FF;
  }

  .attribute-sx5 {
    background-color: #DDBB55;
  }

  .attribute-sx6 {
    background-color: #BB5544;
  }

  .attribute-sx7 {
    background-color: #BBAA66;
  }

  .attribute-sx8 {
    background-color: #7766EE;
  }

  .attribute-sx9 {
    background-color: #AAAABB;
  }

  .attribute-sx10 {
    background-color: #FF4422;
  }

  .attribute-sx11 {
    background-color: #3399FF;
  }

  .attribute-sx12 {
    background-color: #FFCC33;
  }

  .attribute-sx13 {
    background-color: #77CC55;
  }

  .attribute-sx14 {
    background-color: #77DDFF;
  }

  .attribute-sx15 {
    background-color: #FF5599;
  }

  .attribute-sx16 {
    background-color: #6666BB;
  }

  .attribute-sx17 {
    background-color: #6666BB;
  }

  .attribute-sx18 {
    background-color: #FFAAFF;
  }

  .attribute-sx19 {
    background-color: #FF4400;
  }

  .attribute-sx20 {
    background-color: #2266CC;
  }

  .attribute-sx21 {
    background-color: #999999;
  }
</style>
