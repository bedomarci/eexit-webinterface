<template>
  <v-footer
    app>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import ComponentBase from '../components/ComponentBase.vue'

@Component
export default class GameContainerFooter extends ComponentBase {

}
</script>

<style scoped>

</style>
