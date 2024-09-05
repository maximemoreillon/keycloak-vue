/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import { keycloak } from "@/keycloak";
import { useKeycloakStore } from "./stores/keycloak";

const app = createApp(App);

registerPlugins(app);

const keycloakStore = useKeycloakStore();

keycloakStore.keycloak = keycloak;

// onLoad is 'login-required'|'check-sso';

keycloak
  .init({
    onLoad: "login-required",
    redirectUri: "http://localhost:3000",
    // enableLogging: true,
  })
  .then(async (auth) => {
    if (auth) {
      console.log(`Keycload init complete`);
      app.mount("#app");
    }

    //Token Refresh
    setInterval(async () => {
      console.log("Refreshing token");
      const refreshed = await keycloak.updateToken(70);
      console.log({ refreshed });
    }, 6000);
  })
  .catch((error) => {
    console.log(error);
  });

// app.mount("#app");
