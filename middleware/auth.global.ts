import { getCurrentUser } from "vuefire";

// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const user = await getCurrentUser();
  if (to.path === "/auth" && user) {
    return navigateTo({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  }
  if (to.path !== "/auth" && !user) {
    return navigateTo({
      path: "/auth",
      query: {
        redirect: to.fullPath,
      },
    });
  }
});
