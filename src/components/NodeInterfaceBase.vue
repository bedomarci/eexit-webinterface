<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex'

const ON_STATE_CHANGE_FUNCTION_NAME = 'onStateChange'

@Component({
  props: {
  },
  components: {

  }
})
export default class NodeInterfaceBase extends Vue {
  @Prop({ required: true }) private node: string;
  @Prop({ required: true }) private interface: string;
  // @Getter getNode
  // @Getter getInterface

  created () {
    this.$agent.registerNode(this.node)
    this.$agent.registerInterface(this.node, this.interface)
  }

  @Watch('state', { deep: true })
  private stateWatcher (newState: any, oldState: any) {
    const stateHandler = this[ON_STATE_CHANGE_FUNCTION_NAME]
    if (stateHandler && typeof stateHandler === 'function') {
      stateHandler(newState, oldState)
    }
  }

  get state () {
    return this.$store.state.nodes[this.node] ? this.$store.state.nodes[this.node][this.interface] : undefined
  }

  get thisNode () {
    return this.$store.state.nodes[this.node]
  }
}

</script>
