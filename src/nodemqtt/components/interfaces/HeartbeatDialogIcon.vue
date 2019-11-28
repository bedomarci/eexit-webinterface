<template>
  <div>
  <HeartbeatIcon v-bind:node="node" @click="dialog = true" interface="/hrtbt" ></HeartbeatIcon>
  <v-dialog v-model="dialog" max-width="50%">
    <v-card>
      <v-card-title class="headline">{{node.baseTopic}}</v-card-title>
      <v-card-text>
        <v-fade-transition>
        <v-simple-table v-if="this.state">
        <tbody>
          <tr>
            <td>Node ID</td>
            <td>{{this.state.nodeid}}</td>
          </tr>
          <tr>
            <td>Uptime</td>
            <td>{{this.state.uptimeHR}}</td>
          </tr>
          <tr>
            <td>Last heartbeat</td>
            <td>
              {{lastHeartbeatDifference}} <br>
              <small>{{this.state.lastHeartbeatHR}}</small>
            </td>
          </tr>
          <tr>
            <td>Network address</td>
            <td>{{this.state.netadd}}</td>
          </tr>
          <tr>
            <td>Free heap</td>
            <td>{{this.state.freehp}}</td>
          </tr>
        </tbody>
        </v-simple-table>
        </v-fade-transition>
        <v-fade-transition>
        <DataNotAvailable v-model="this.state"></DataNotAvailable>
        </v-fade-transition>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import NodeInterfaceBase from '@/nodemqtt/components/interfaces/NodeInterfaceBase.vue'
import { mapGetters, mapState } from 'vuex'
import moment from 'moment'
import HeartbeatIcon from './HeartbeatIcon.vue'
import DataNotAvailable from '../DataNotAvailable.vue'
  @Component({
    props: {

    },
    components: { DataNotAvailable, HeartbeatIcon },
    computed: {
      ...mapState('nodes', ['online']),
      ...mapGetters('nodes', ['getNode', 'getInterface'])
    }
  })
export default class HeartbeatDialogIcon extends NodeInterfaceBase {
    dialog : boolean = false
    now: any = moment()

    created () {
      setInterval(function () {
        this.now = moment()
      }.bind(this), 500)
    }

    get lastHeartbeatDifference () {
      let millis = Math.abs(this.now.diff(moment(this.state.lastHeartbeat)))
      millis = Math.floor(millis / 1000)
      return millis
    }
}
</script>
