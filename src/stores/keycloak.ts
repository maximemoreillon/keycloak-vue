import Keycloak from "keycloak-js";
import { defineStore } from "pinia";

export const useKeycloakStore = defineStore("keycloak", () => {
  const keycloak = ref<Keycloak>();

  return {
    keycloak,
  };
});
