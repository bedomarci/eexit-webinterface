<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import NodeConfig from '../../interfaces/NodeConfigInterface'

const ON_STATE_CHANGE_FUNCTION_NAME = 'onStateChange'

@Component({
  components: {

  },
  computed: {
    ...mapGetters('nodes', ['getInterface', 'getNode'])
  },
  filters: {
    fallback: function (value:any) {
      return value || 'n/a'
    }
  }
})
export default class InterfaceBase extends Vue {
  @Prop({ required: true }) private node: NodeConfig;
  @Prop({ required: true }) private interface: any;
  private interfacePublish: string = ''
  private interfaceSubscribe: string = ''
  abstract onStateChange()

  created () {
    if (Array.isArray(this.interface)) {
      this.interfacePublish = this.interface[0]
      this.interfaceSubscribe = this.interface[1]
    } else if (typeof this.interface === 'string') {
      this.interfacePublish = this.interface
      this.interfaceSubscribe = this.interface
    }
    this.$agent.registerInterface(this.node.baseTopic, this.interfaceSubscribe)
  }

  @Watch('state', { deep: true })
  private stateWatcher (newState: any, oldState: any) {
    const stateHandler = this[ON_STATE_CHANGE_FUNCTION_NAME]
    if (stateHandler && typeof stateHandler === 'function') {
      stateHandler(newState, oldState)
    }
  }

  get state () {
    return this.$store.state.nodes[this.node.baseTopic] ? this.$store.state.nodes[this.node.baseTopic][this.interfaceSubscribe] : undefined
  }

  get thisNode () {
    return this.$store.state.nodes[this.node.baseTopic]
  }

  publish (value:any) {
    this.$agent.publish(this.node.baseTopic + this.interfacePublish, { data: value })
  }
}

</script>
