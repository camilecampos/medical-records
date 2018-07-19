import Vue from 'vue';
import Router from 'vue-router';

import DashboardLayout from "../layout/dashboard/DashboardLayout"; //index original do template
import IndexLayout from "../layout/dashboard/Index";

// GeneralViews
import NotFound from "../pages/NotFoundPage";

//Agenda do Médico
import AgendaMedico from "../pages/AgendaMedico";

// Admin pages -- original do template
import Dashboard from "../pages/UserProfile";
import UserProfile from "../pages/UserProfile";
import Notifications from "../pages/Notifications";
import Icons from "../pages/Icons";
import Maps from "../pages/Maps";
import Typography from "../pages/Typography";
import TableList from "../pages/TableList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "dashboard",
      component: IndexLayout
    },
    {
      path: "/agenda",
      name: "agenda",
      component: DashboardLayout
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/stats",
      name: "stats",
      component: UserProfile
    },
    {
      path: "/notifications",
      name: "notifications",
      component: Notifications
    },
    {
      path: "/icons",
      name: "icons",
      component: Icons
    },
    {
      path: "/maps",
      name: "maps",
      component: Maps
    },
    {
      path: "/typography",
      name: "typography",
      component: Typography
    },
    {
      path: "/table-list",
      name: "table-list",
      component: TableList
    },
    { path: "*", component: NotFound }
  ],
});

