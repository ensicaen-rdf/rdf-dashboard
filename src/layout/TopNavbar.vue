<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button
        type="button"
        class="navbar-toggler navbar-toggler-right"
        :class="{ toggled: $sidebar.showSidebar }"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
      >
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end ml-5">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a href="#" class="nav-link mt-3">
              <base-input
                class="ml-2"
                type="text"
                placeholder="Search"
                v-model="searchText"
                @change="handleChange"
              >
              </base-input>

              <i class="nc-icon nc-zoom-split mt-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  data() {
    return {
      activeNotifications: false,
      searchText: "",
      results: [],
      usersList: [
        {
          id: 1,
          firstname: "Michel",
          lastname: "Dupont",
          secondName: "",
          thirdName: "",
          birthdate: "05/04/1970",
          birthplace: "Caen",
          address: "3 rue de la Saint Martin",
          country: "France",
          city: "Bayeux",
          zipCode: "12345",
          workplace: "Orange",
          socialSecurityNumber: "9876543210",
          eyesColor: "brown",
          height: 170,
          weight: 75,
          diseases: "N/A",
          bloodType: "A",
          rhesus: "+",
          score: 1700,
        },
        {
          id: 2,
          firstname: "Etienne",
          lastname: "Demarre",
          secondName: "",
          thirdName: "",
          birthdate: "21/06/1999",
          birthplace: "Paris",
          address: "3 rue de la Saint Martin",
          country: "France",
          city: "Brest",
          zipCode: "12345",
          workplace: "Orange",
          socialSecurityNumber: "9876543210",
          eyesColor: "brown",
          height: 170,
          weight: 75,
          diseases: "N/A",
          bloodType: "A",
          rhesus: "+",
          score: 1423,
        },
      ],
    };
  },
  methods: {
    handleChange() {
      this.$emit("search", this.searchText);
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
  },
};
</script>
<style>
</style>
