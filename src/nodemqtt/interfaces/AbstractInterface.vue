<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MQTTAgent from '@/nodemqtt/MQTTAgent'

@Component
export default abstract class AbstractInterface<T> extends Vue {
    abstract interfaceName(): string
    abstract nodeName(): string
    private _value: T;

    // constructor (nodeName: string, interfaceName: string, agent: MQTTAgent) {
    //   super()
    //   this._interfaceName = interfaceName
    //   this._nodeName = nodeName
    //   this._agent = agent
    //   agent.subscribe(this.topic)
    // }

    created () {

    }

    get value (): T {
      return this._value
    }

    set value (value: T) {
      this._value = value
      this._agent.publish(this.topic, value)
    }

    get topic (): string {
      return this.nodeName() + '/' + this.interfaceName()
    }
}
</script>
