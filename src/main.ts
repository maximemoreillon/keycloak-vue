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
  })
  .catch((error) => {
    console.log(error);
  });

// app.mount("#app");
