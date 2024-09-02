<template>
  <h2>Sensitive data</h2>
</template>

<script lang="ts" setup>
import { useKeycloakStore } from "@/stores/keycloak";

const { VITE_PROTECTED_DATA_URL } = import.meta.env;

const keycloakStore = useKeycloakStore();

const getProtectedData = async () => {
  const url = VITE_PROTECTED_DATA_URL;
  const headers = {
    authorization: `Bearer ${keycloakStore.keycloak?.token}`,
  };

  const response = await fetch(url, { headers });
  const text = await response.text();
  console.log(text);
};

onMounted(() => {
  getProtectedData();
});
</script>
