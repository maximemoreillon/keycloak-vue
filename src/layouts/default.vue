<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title> Vue + Keycloak </v-app-bar-title>
      <v-spacer />

      <LoginButton />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item link title="Home" to="/" />
        <v-list-item link title="Profile" to="/profile" />

        <v-list-item link title="Protected" to="/protected" />
        <v-list-item link title="Unprotected" to="/unprotected" />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const drawer = ref();
</script>
