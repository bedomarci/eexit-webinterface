<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <span>MTMINIMETRO: {{ interface('MTMINIMETRO', '/hrtbt') }}</span><br>
    <span>MTLOTTERY: {{ interface('MTLOTTERY', '/hrtbt') }}</span><br>
    <span>MTEDISON: {{ interface('MTEDISON', '/hrtbt') }}</span><br>
    <span>MTDRAWER: {{ interface('MTDRAWER', '/hrtbt') }}</span><br>
    <span>MTPIPE: {{ interface('MTPIPE', '/hrtbt') }}</span><br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('nodes', ['MTMINIMETRO', 'MTLOTTERY']),
    ...mapGetters('nodes', ['node', 'interface'])
  }
})
export default class App extends Vue {
  created () {
    this.$agent.connect({
      // host: 'localhost',
      host: 'broker.orangepixel.hu',
      port: 8884,
      username: 'eexit',
      rejectUnauthorized: false,
      protocol: 'wss',
      password: 'Cirkusz1984',
      clientId: 'eexit_dashboard' + Math.random().toString(16).substr(2, 8)
    })
    this.$agent.registerTopicPrefix('EEXIT/')
    this.$agent.registerNode('MTLOTTERY')
    this.$agent.registerNode('MTMINIMETRO')
    this.$agent.registerNode('MTEDISON')
    this.$agent.registerNode('MTDRAWER')
    this.$agent.registerNode('MTPIPE')
    this.$agent.subscribe('EEXIT/+/hrtbt')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
