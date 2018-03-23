<template>
  <a class="weui-cell weui-cell_access" :href="'/pages/wiki/wiki?id='+i">
    <div class="weui-cell__bd">
      <p>#{{ list.id }}<span :class="'sprite-icon   sprite-icon-' + list.id"></span> {{list.name}}</p>
    </div>
    <div class="">
      <attribute :text="s" v-for="(s, x) in list.sx" :key="x"></attribute>
    </div>
  </a>
</template>

<script>
  import attribute from '@/components/attribute.vue'

  export default {
    props: ['i', 'list'],
    components: {
      attribute
    },
    data () {
      return {
//        list: this.$list.rows
      }
    }
  }
</script>
