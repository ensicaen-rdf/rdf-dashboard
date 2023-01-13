import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
  import Overview from 'src/pages/Overview.vue'
  import UserProfile from 'src/pages/UserProfile.vue'
  import UsersList from 'src/pages/UsersList.vue'
  import Tickets from 'src/pages/Tickets.vue'
  import SignIn from 'src/pages/SignInPage.vue'
  import Ranking from 'src/pages/RankingPage.vue'

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/admin/overview",
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview,
      },
      {
        path: "user/:id",
        name: "User",
        props: true,
        component: UserProfile,
      },
      {
        path: "users-list",
        name: "UsersList",
        component: UsersList,
      },
      {
        path: "ranking",
        name: "Ranking",
        component: Ranking,
      },
      {
        path: "tickets",
        name: "Tickets",
        component: Tickets,
      },
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Views/' + name + '.vue');
   return res;
};**/

export default routes;
