<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title> Vue + Keycloak </v-app-bar-title>
      <v-spacer />

      <v-btn
        v-if="keycloakStore.client.authenticated"
        to="/profile"
        icon="mdi-account"
      />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item link title="Home" to="/" />
        <v-list-item link title="Profile" to="/profile" />
        <v-list-item
          v-if="keycloakStore.client.authenticated"
          link
          title="Logout"
          to="/logout"
        />
        <v-list-item v-else link title="Login" to="/login" />
        <v-list-item link title="Protected" to="/protected" />
        <v-list-item link title="Unprotected" to="/unprotected" />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { useKeycloakStore } from "@/stores/keycloak";

const drawer = ref();
const keycloakStore = useKeycloakStore();
</script>
