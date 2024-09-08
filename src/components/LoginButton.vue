<template>
  <v-btn
    v-if="keycloakStore.client.authenticated"
    @click="() => keycloakStore.client.logout()"
    icon="mdi-logout"
  />
  <v-btn v-else @click="() => keycloakStore.client.login()" icon="mdi-login" />
</template>

<script lang="ts" setup>
import { useKeycloakStore } from "@/stores/keycloak";

const keycloakStore = useKeycloakStore();
</script>
