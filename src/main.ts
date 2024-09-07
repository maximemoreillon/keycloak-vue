import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import { useKeycloakStore } from "./stores/keycloak";
import { kcClient } from "@/keycloak";

const app = createApp(App);

console.log("[Keycloak] Init...");
kcClient
  .init({
    // onLoad: "check-sso", // 'login-required'|'check-sso';
    onLoad: "check-sso",
  })
  .then(() => {
    console.log("[Keycloak] Init OK");
    registerPlugins(app);
    const keycloakStore = useKeycloakStore();
    keycloakStore.client = kcClient;

    app.mount("#app");
  });

//  This approach enforces login prior to using the app
// console.log(`Keycoak client init...`);
// keycloakStore.client
//   .init({
//     onLoad: "login-required", // 'login-required'|'check-sso';
//     enableLogging: true,
//   })
//   .then((authorized) => {
//     console.log(`Keycoak client init finished`);

//     if (authorized) app.mount("#app");

//     // Token refresh
//     setInterval(() => {
//       console.log("[Keycloak] Checking if token as expired");
//       keycloakStore.client.updateToken();
//     }, 60000);
//   });
