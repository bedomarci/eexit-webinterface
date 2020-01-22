<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="$router.push({ name: 'mission', id: 'office'})">
                Go to Demo1
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="$router.push({ name: 'mission', id: 'enginehouse'})">
                Go to Demo2
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
          <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

  @Component({
    props: {
      source: String
    }
  })
export default class Layout extends Vue {
    drawer: any = null
    created () {
      this.$agent.registerTopicPrefix('EEXIT/')
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
    }
}
</script>
