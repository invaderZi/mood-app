import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { useUserStore } from "src/stores/user";

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
      // Verifica se a rota requer autenticação
      if (!userStore.isLogged) {
        // Se não estiver logado, redireciona para a página de login
        next("/login");
      } else {
        // Se estiver logado, permite a navegação
        next();
      }
    } else {
      // Para rotas que não requerem autenticação, permite a navegação
      next();
    }
  });

  return Router;
});
