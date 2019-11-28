<template>
  <div>
  <v-btn icon x-small @click="dialog = true" @mouseover="hover = true" @mouseleave="hover = false">
    <v-fade-transition>
      <v-icon>mdi-settings</v-icon>
    </v-fade-transition>
  </v-btn>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{node.baseTopic}} Configuration</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-fade-transition>
          <v-row v-if="this.state">
            <v-col cols="12">
              <v-text-field v-model="this.state.basetpc" label="Base topic" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.mqttsrv" label="MQTT Server" hint="IP or URL" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.mqttusr" label="MQTT Username" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.mqttpwd" label="MQTT Password" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.mqttprt" label="MQTT Port" ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.wifissid" label="Wifi SSID"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.wifibssid" label="Wifi BSSID" hint="XX:XX:XX:XX:XX:XX"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.wifipwd" label="Wifi Passphrase" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.wifichn" label="Wifi Passphrase" hint="0 - auto" ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.ipaddr" label="Client IP Address" hint="0.0.0.0 - DHCP"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.gateway" label="Gateway IP Address"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="this.state.subnet" label="Subnet IP Address" ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
          </v-fade-transition>
          <v-fade-transition>
            <DataNotAvailable v-model="this.state"></DataNotAvailable>
          </v-fade-transition>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>
<script lang='ts'>
import Component from 'vue-class-component'
import NodeInterfaceBase from './NodeInterfaceBase.vue'
import DataNotAvailable from '../DataNotAvailable.vue'

  @Component({
    props: {},
    components: {
      DataNotAvailable
    },
    computed: {
      // ...mapState('nodes', ['online'])
    }
  })
export default class ConfigDialogIcon extends NodeInterfaceBase {
    protected hover: boolean = false
    protected dialog: boolean = false
}
</script>
