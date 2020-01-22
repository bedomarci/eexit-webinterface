<template>
  <v-navigation-drawer
    app
    permanent
    clipped
  >
    <v-list dense>
      <v-list-item link v-for="m in config.missions" v-bind:key="m.id" @click="$router.push({ name: 'mission', params: { id: m.id }})">
        <v-list-item-action>
          <v-icon>mdi-seal</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ m.id }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import ComponentBase from '../components/ComponentBase.vue'
import Component from 'vue-class-component'

@Component
export default class GameContainerSidebar extends ComponentBase {
}
</script>

<style scoped>

</style>
