<template>
  <div class="content">
    <div class="container-fluid">
      <h2>Classement</h2>
      <div class="alert alert-danger" role="alert" v-if="this.$parent.usersRank.length === 0">
        Aucun citoyen trouvé...
      </div>

      <table class="table table-striped" v-else>
        <thead>
          <tr>
            <th scope="col" class="col-md-2">Rang</th>
            <th scope="col" class="col-md-3">Nom</th>
            <th scope="col" class="col-md-3">Prénom</th>
            <th scope="col" class="col-md-2">Score</th>
            <th scope="col" class="col-md-3">Ville</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in this.$parent.usersRank"
            :key="user.idPerson"
            v-on:click="$router.push('/admin/user/' + user.idPerson.toString())"
            style="cursor: pointer;"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.lastName }}</td>
            <td>{{ user.firstNames.split(" ")[0] }}</td>
            <td>{{ user.score }}</td>
            <td>{{ user.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
export default {
  components: {
    LTable,
    Card,
  },
};
</script>
<style>
</style>
