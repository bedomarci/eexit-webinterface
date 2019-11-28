<template>
  <v-sheet
    v-if="!this.value"
    class="px-3 pt-3 pb-3"
  >
    <v-alert type="info">
      No data has been received yet!
    </v-alert>
    <v-skeleton-loader
      class="mx-auto"
      type="card"
    ></v-skeleton-loader>
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ComponentBase from './ComponentBase.vue'
import { Prop } from 'vue-property-decorator'

@Component
export default class DataNotAvailable extends Vue {
  @Prop({ required: true }) private value: any;
}
</script>
