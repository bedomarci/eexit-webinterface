<template>
  <div class="text-center">
    <v-menu bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          depressed=""
          small
          v-on="on"
        >
          <v-icon>mdi-language</v-icon> {{context.language}}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(lang, index) in config.languages"
          :key="index"
        >
          <v-list-item-title @click="selectLanguage(lang)">{{ lang }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import AppletBase from '../ComponentBase.vue'

  @Component({
    computed: {
    },
    methods: {
    }
  })
export default class LanguageSelectorApplet extends AppletBase {
  selectLanguage (lang:string) {
    this.$store.dispatch('game/selectLanguage', { gameId: this.config.gameId, language: lang })
  }
}
</script>
