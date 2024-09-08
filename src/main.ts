import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import { kcClient } from "@/keycloak";

const app = createApp(App);

kcClient
  .init({
    // onLoad: "check-sso", // 'login-required'|'check-sso';
    onLoad: "check-sso",
    enableLogging: true,
  })
  .then(() => {
    registerPlugins(app);
    // const keycloakStore = useKeycloakStore();
    // keycloakStore.client = kcClient;

    app.mount("#app");

    setInterval(() => {
      if (kcClient.authenticated) kcClient.updateToken();
    }, 60000);
  });

//  This approach enforces login prior to using the app
// keycloakStore.client
//   .init({
//     onLoad: "login-required", // 'login-required'|'check-sso';
//     enableLogging: true,
//   })
//   .then((authorized) => {

//     if (authorized) app.mount("#app");

//     // Token refresh
//     setInterval(() => {
//       console.log("[Keycloak] Checking if token as expired");
//       keycloakStore.client.updateToken();
//     }, 60000);
//   });
