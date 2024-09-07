<template>
  <h2>Login</h2>

  <v-row>
    <v-col cols="auto">
      <v-btn @click="keycloakStore.client?.login" text="Login" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useKeycloakStore } from "@/stores/keycloak";

const keycloakStore = useKeycloakStore();
</script>
