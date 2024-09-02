import Keycloak from "keycloak-js";

const {
  VITE_KEYCLOAK_CLIENT_ID,
  VITE_KEYCLOAK_SERVER_URL,
  VITE_KEYCLOAK_REALM,
} = import.meta.env;

export const keycloak = new Keycloak({
  url: VITE_KEYCLOAK_SERVER_URL,
  realm: VITE_KEYCLOAK_REALM,
  clientId: VITE_KEYCLOAK_CLIENT_ID,
});
