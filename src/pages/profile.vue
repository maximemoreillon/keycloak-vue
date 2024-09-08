<template>
  <h2 class="my-8">User profile page</h2>

  <p>Authenticated: {{ keycloakStore.client.authenticated }}</p>

  <h3 class="my-4">user info</h3>
  <pre>{{ JSON.stringify(userInfo, null, 2) }}</pre>

  <h3 class="my-4">User profile</h3>
  <pre>{{ JSON.stringify(userProfile, null, 2) }}</pre>
</template>

<script lang="ts" setup>
import { useKeycloakStore } from "@/stores/keycloak";

const userInfo = ref();
const userProfile = ref();
const keycloakStore = useKeycloakStore();
onMounted(async () => {
  const ui = await keycloakStore.client.loadUserInfo();
  userInfo.value = ui;

  const up = await keycloakStore.client.loadUserProfile();
  userProfile.value = up;
});
</script>
