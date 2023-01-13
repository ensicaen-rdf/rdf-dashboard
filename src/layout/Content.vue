<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      usersList: [],
      usersRank: [],
    };
  },
  methods: {
    retrieveUsers: function () {
      axios
        .get("https://intensif06.ensicaen.fr/api/people")
        .then((response) => {
          this.usersList = response.data;
          this.usersRank = JSON.parse(JSON.stringify(response.data));
          this.usersRank.sort(function (a, b) {
            return b.csse - a.csse;
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  mounted() {
    this.retrieveUsers();
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
