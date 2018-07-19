import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue"; //index original do template
import IndexLayout from "@/layout/dashboard/Index.vue";

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";


//Agenda do Médico
import AgendaMedico from "@/pages/AgendaMedico.vue";

// Admin pages -- original do template
import Dashboard from "@/pages/UserProfile.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";

const routes = [
  {
    path: "",
    name: "/dashboard",
    component: IndexLayout
  },
  {
    path: "agenda",
    name: "agenda",
    component: DashboardLayout
  },
  {
    path: "dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "stats",
    name: "stats",
    component: UserProfile
  },
  {
    path: "notifications",
    name: "notifications",
    component: Notifications
  },
  {
    path: "icons",
    name: "icons",
    component: Icons
  },
  {
    path: "maps",
    name: "maps",
    component: Maps
  },
  {
    path: "typography",
    name: "typography",
    component: Typography
  },
  {
    path: "table-list",
    name: "table-list",
    component: TableList
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
