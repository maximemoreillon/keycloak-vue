import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import { kcClient } from "@/keycloak";

const app = createApp(App);

kcClient
  .init({
    onLoad: "check-sso",
    enableLogging: true,
  })
  .then(() => {
    registerPlugins(app);
    app.mount("#app");

    // const keycloakStore = useKeycloakStore();
    // keycloakStore.client = kcClient;

    setInterval(() => {
      if (kcClient.authenticated) kcClient.updateToken();
    }, 60000);
  });

//  This approach enforces login prior to using the app
// kcClient
//   .init({
//     onLoad: "login-required", // 'login-required'|'check-sso';
//   })
//   .then((authorized) => {
//     if (authorized) {
//       registerPlugins(app);
//       app.mount("#app");
//     }

//     // Token refresh
//     setInterval(() => {
//       if (kcClient.authenticated) kcClient.updateToken();
//     }, 60000);
//   });
