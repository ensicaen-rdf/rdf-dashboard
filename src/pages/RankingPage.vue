<template>
  <div class="content">
    <!-- <div>
      <input type="text" v-model="search" placeholder="Search" />
      <a href="#">
        <i class="nc-icon nc-zoom-split"></i>
        <span>&nbsp;Search</span>
      </a>
      <br />
    </div>-->
    <div class="container-fluid">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Rang</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Score</th>
            <th scope="col">Ville</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in usersListRank()"
            :key="user.id"
            v-on:click="$router.push('/admin/user/' + user.id.toString())"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.lastname }}</td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.score }}</td>
            <td>{{ user.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import usersList from "../dataset/users.json";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
export default {
  components: {
    LTable,
    Card,
  },
  data() {
    return {
      usersList: usersList,
    };
  },
  methods: {
    usersListRank: function () {
      let usersListCopy = [];
      usersListCopy = this.usersList;
      return usersListCopy.sort(function (a, b) {
        return b.score - a.score;
      });
    },
  },
  mounted() {
    this.usersListRank();
  },
};
</script>
<style>
</style>
