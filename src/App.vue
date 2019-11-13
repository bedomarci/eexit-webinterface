<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <span>MTMETRODIMMER: {{ interface('MTMETRODIMMER', '/hrtbt') }} {{ interface('MTMETRODIMMER', 'online') }}</span><br>
      <span>MTMETROCONSOLE: {{ interface('MTMETROCONSOLE', '/hrtbt') }} {{ interface('MTMETROCONSOLE', 'online') }}</span><br>
      <span>MTEDISON: {{ interface('MTEDISON', '/hrtbt') }} {{ interface('MTEDISON', 'online') }}</span><br>
      <span>MTDRAWER: {{ interface('MTDRAWER', '/hrtbt') }} {{ interface('MTDRAWER', 'online') }}</span><br>
      <span>MTPIPE: {{ interface('MTPIPE', '/hrtbt') }} {{ interface('MTPIPE', 'online') }}</span><br>
      <InterfaceIndicatorBase node="MTMETRODIMMER" interface="/hrtbt"></InterfaceIndicatorBase>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
import HeartbeatInterface from './nodemqtt/components/interfaces/HeartbeatInterface.vue'

@Component({
  components: {
    InterfaceIndicatorBase: HeartbeatInterface,
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
    this.$agent.registerNode('MTMETRODIMMER')
    this.$agent.registerNode('MTMETROCONSOLE')
    this.$agent.registerNode('MTLOTTERY')
    this.$agent.registerNode('MTMINIMETRO')
    this.$agent.registerNode('MTEDISON')
    this.$agent.registerNode('MTDRAWER')
    this.$agent.registerNode('MTPIPE')
    this.$agent.subscribe('EEXIT/+/hrtbt')
    this.$agent.subscribe('EEXIT/+/log')
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
