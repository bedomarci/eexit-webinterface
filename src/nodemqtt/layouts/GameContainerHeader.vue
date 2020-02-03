<template>
  <v-app-bar
    app
    dark
    clipped-left
    elevate-on-scroll
    dense
  >
    <v-app-bar-nav-icon @click.stop="$parent.drawer = !$parent.drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{config.gameName}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <TimerApplet v-bind:config="config"></TimerApplet>
    <LanguageSelectorApplet v-bind:config="config"></LanguageSelectorApplet>
    <StateControlApplet v-bind:config="config"></StateControlApplet>

  </v-app-bar>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../components/ComponentBase.vue'
import TimerApplet from '../components/applets/TimerApplet.vue'
import LanguageSelectorApplet from '../components/applets/LanguageSelectorApplet.vue'
import StateControlApplet from '../components/applets/StateControlApplet.vue'

@Component({
  components: {
    LanguageSelectorApplet,
    TimerApplet,
    StateControlApplet

  }
})
export default class GameContainerHeader extends ComponentBase {

}

</script>
