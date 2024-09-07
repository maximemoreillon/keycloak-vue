import { NavigationGuardWithThis } from "vue-router";

import { kcClient } from "@/keycloak";
export const beforeEachHandler: NavigationGuardWithThis<undefined> = (
  to,
  from
) => {
  // const keycloakStore = useKeycloakStore();

  console.log(`[Router] before ${to.path}`);
  console.log(kcClient);

  if (to.path.startsWith("/protected")) {
    console.log("Route is protected");

    if (!kcClient.authenticated) {
      console.warn(`[Keycload] Client is not authenticated`);
      // kcClient.login({
      //   redirectUri: `${window.location}/${to.path}`,
      // });
    }
  }

  // explicitly return false to cancel the navigation
  return;
};
