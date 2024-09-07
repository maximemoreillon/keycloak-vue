<template>
  <h2 class="my-8">Protected page</h2>
  <v-row>
    <v-col cols="auto">
      <v-btn :loading="loading" @click="getProtectedData">
        Get protected data
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useKeycloakStore } from "@/stores/keycloak";

const { VITE_PROTECTED_DATA_URL } = import.meta.env;

const keycloakStore = useKeycloakStore();

const loading = ref(false);

const getProtectedData = async () => {
  const url = VITE_PROTECTED_DATA_URL;
  const headers = {
    authorization: `Bearer ${keycloakStore.client?.token}`,
  };

  loading.value = true;
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error(response.statusText);
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getProtectedData();
});
</script>
