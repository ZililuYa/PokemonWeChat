<template>
  <div class="container" id="container">
    <!--<div class="page home js_show  page__tab">-->
    <div class="page__bd">
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" :key="k" v-for="(i, k) in arr">
          <div class="weui-cell__bd">
            <p><span class="skill_id">{{ list[k].id }}</span> {{list[k].name}}</p>
          </div>
          <div class="">
            <attribute :text="list[k].sx"></attribute>
            <attribute :text="list[k].fl"></attribute>
          </div>
        </a>
      </div>
    </div>
    <!--</div>-->
    <!--<tab :text="2"></tab>-->
  </div>
</template>

<script>
  import attribute from '@/components/attribute.vue'

  export default {
    data () {
      return {
        arr: [],
        list: this.$skill.rows
      }
    },
    components: {
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
  .skill_id {
    display: inline-block;
    width: 25px;
    text-align: left;
  }

</style>
