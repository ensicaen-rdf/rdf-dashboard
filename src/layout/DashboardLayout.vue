<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/users-list">
        <i class="nc-icon nc-notes"></i>
        <p>Annuaire</p>
      </sidebar-link>
      <sidebar-link to="/admin/ranking">
        <i class="nc-icon nc-chart-bar-32"></i>
        <p>Classement</p>
      </sidebar-link>
      <sidebar-link to="/admin/tickets">
        <i class="nc-icon nc-bell-55"></i>
        <p>Tickets</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <dashboard-content @click="toggleSidebar" style="min-height: 90vh">
      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
