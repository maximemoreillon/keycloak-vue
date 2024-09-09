import { NavigationGuardWithThis } from "vue-router";
import { kcClient } from "@/keycloak";

export const beforeEachHandler: NavigationGuardWithThis<undefined> = async (
  to,
  from
) => {
  if (to.path.startsWith("/protected")) {
    if (!kcClient.authenticated) {
      kcClient.login();
      return false;
    }
  }

  return;
};
