<template>
  <div>
<!--    <span>MTMETRODIMMER: {{ interface('MTMETRODIMMER', '/hrtbt') }} {{ interface('MTMETRODIMMER', 'online') }}</span><br>-->
<!--    <span>MTMETROCONSOLE: {{ interface('MTMETROCONSOLE', '/hrtbt') }} {{ interface('MTMETROCONSOLE', 'online') }}</span><br>-->
<!--    <span>MTEDISON: {{ interface('MTEDISON', '/hrtbt') }} {{ interface('MTEDISON', 'online') }}</span><br>-->
<!--    <span>MTDRAWER: {{ interface('MTDRAWER', '/hrtbt') }} {{ interface('MTDRAWER', 'online') }}</span><br>-->
<!--    <span>MTPIPE: {{ interface('MTPIPE', '/hrtbt') }} {{ interface('MTPIPE', 'online') }}</span><br>-->
    <InterfaceIndicatorBase node="MTMETRODIMMER" interface="/hrtbt"></InterfaceIndicatorBase>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import HeartbeatIcon from '@/nodemqtt/components/interface/HeartbeatIcon.vue'

  @Component({
    components: {
      InterfaceIndicatorBase: HeartbeatIcon,
      HelloWorld
    },
    computed: {
      // ...mapState('nodes', ['MTMINIMETRO', 'MTLOTTERY']),
      // ...mapGetters('nodes', ['node', 'interface'])
    }
  })
export default class DemoPage1 extends Vue {
  created () {
    // this.$agent.registerNode('MTMETRODIMMER')
    // this.$agent.registerNode('MTMETROCONSOLE')
    // this.$agent.registerNode('MTLOTTERY')
    // this.$agent.registerNode('MTMINIMETRO')
    // this.$agent.registerNode('MTEDISON')
    // this.$agent.registerNode('MTDRAWER')
    // this.$agent.registerNode('MTPIPE')
    // this.$agent.subscribe('EEXIT/+/hrtbt')
    // this.$agent.subscribe('EEXIT/+/log')
  }
}
</script>
