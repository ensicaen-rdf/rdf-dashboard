<template>
  <div class="content">
    <div class="container-fluid">
      <h2>Annuaire</h2>
      <div class="row">
        <div class="col-12">
          <div class="alert alert-danger" role="alert" v-if="this.$parent.usersList.length === 0">
            Aucun citoyen trouvé...
          </div>

          <table class="table table-striped" v-else>
            <thead>
            <tr>
              <th scope="col" class="col-md-3">ID National</th>
              <th scope="col" class="col-md-3">Nom</th>
              <th scope="col" class="col-md-3">Prénom</th>
              <th scope="col" class="col-md-3">Ville</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="user in this.$parent.usersList" :key="user.idPerson"
                  v-on:click="$router.push('/admin/user/' + user.idPerson.toString())"
                  style="cursor: pointer;"
              >
                <th scope="row">{{ user.nationalId }}</th>
                <td>{{ user.lastName }}</td>
                <td>{{ user.firstNames.split(" ")[0] }}</td>
                <td>{{ user.city }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  export default {
    components: {
      LTable,
      Card
    },
  }
</script>
<style>
</style>
