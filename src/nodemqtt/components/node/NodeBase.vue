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
export default class NodeBase extends Vue {
    @Prop({ required: true }) private node: NodeConfig;

    created () {

    }
}

</script>
