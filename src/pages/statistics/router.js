const routes = [
  {
    path: "statistics",
    redirect: "/statistics/dashboard",
    name: "statistics",
    children: [
      {
        path: "dashboard",
        name: "statistics-dashboard",
        component: () => import("./dashboard/index.vue"),
      },
    ],
  },
];

export default routes;
