import Keycloak from "keycloak-js";

const {
  VITE_KEYCLOAK_CLIENT_ID,
  VITE_KEYCLOAK_SERVER_URL,
  VITE_KEYCLOAK_REALM,
} = import.meta.env;

export const kcClient = new Keycloak({
  url: VITE_KEYCLOAK_SERVER_URL,
  realm: VITE_KEYCLOAK_REALM,
  clientId: VITE_KEYCLOAK_CLIENT_ID,
});

kcClient.onReady = () => {
  console.log("[Keycloak] onReady");
};

kcClient.onActionUpdate = () => {
  console.log("[Keycloak] onActionUpdate");
};

kcClient.onAuthSuccess = () => {
  console.log("[Keycloak] onAuthSuccess");
};
