const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/MoodSetPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "profile",
        component: () => import("pages/ProfilePage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "friends",
        component: () => import("pages/FriendsPage.vue"),
        meta: { requiresAuth: true },
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
