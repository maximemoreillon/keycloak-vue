// Still not sure if this is needed

import Keycloak from "keycloak-js";
import { defineStore } from "pinia";
import { kcClient } from "@/keycloak";

export const useKeycloakStore = defineStore("keycloak", () => {
  const client = ref<Keycloak>(kcClient);

  return {
    client,
  };
});
