import { NavigationGuardWithThis } from "vue-router";
import { kcClient } from "@/keycloak";

export const beforeEachHandler: NavigationGuardWithThis<undefined> = async (
  to,
  from
) => {
  console.log(`[Router] before ${to.path}`);

  if (to.path.startsWith("/protected")) {
    console.log("Route is protected");

    if (!kcClient.authenticated) {
      // kcClient.login();
      // return false;
    }
  }

  // explicitly return false to cancel the navigation
  return;
};
