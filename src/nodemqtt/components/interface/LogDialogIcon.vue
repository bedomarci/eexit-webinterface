<template>
  <div>
    <v-btn icon x-small @click="dialog = true" @mouseover="hover = true" @mouseleave="hover = false">
      <v-icon>mdi-tooltip-text</v-icon>
    </v-btn>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay scrollable transition="dialog-bottom-transition">
        <v-card dark>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{node.commonName}} log</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Close</v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-sheet dark class="pa-4 overflow-y-auto" height="100%">
            <p v-for="(item, index) in archive" v-bind:key="index" class="ma-0 caption ">{{ item.data }}</p>
            <div v-bind:id="bottomId"></div>
            <DataNotAvailable v-model="archive"></DataNotAvailable>
          </v-sheet>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import InterfaceBase from './NodeInterfaceBase.vue'
import { Watch } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import DataNotAvailable from '../misc/DataNotAvailable.vue'

  @Component({
    components: { DataNotAvailable },
    computed: {
      ...mapGetters('nodes', ['getInterface', 'getNode'])
    }
  })
export default class LogDialogIcon extends InterfaceBase {
    dialog: boolean = false
    log: string = ''
    bottomId: string = ''

    created () {
      this.bottomId = 'log-bottom-' + this._uid
    }

    @Watch('archive', { deep: true })
    private archiveWatcher (newState: any, oldState: any) {
    }

    get archive () {
      return this.$store.state.nodes[this.node.baseTopic] ? this.$store.state.nodes[this.node.baseTopic]['logArchive'] : undefined
    }

    @Watch('dialog')
    scrollToEnd (newState: boolean, oldState: boolean) {
      if (!newState) return
      let element = document.getElementById(this.bottomId)
      if (element) element.scrollIntoView()
    }
}
</script>
