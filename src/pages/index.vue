<template>
  <h2>Hi</h2>
</template>

<script lang="ts" setup>
import { useKeycloakStore } from "@/stores/keycloak";

const keycloakStore = useKeycloakStore();

const getProtectedData = async () => {
  const url = "http://172.16.98.151:7070/data";
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
