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
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Age</th>
              <th scope="col">Ville</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="user in this.$parent.usersList" :key="user.id" v-on:click="$router.push('/admin/user/' + user.idPerson.toString())">
                <th scope="row">{{ user.nationalId }}</th>
                <td>{{ user.firstNames.split(" ")[0] }} {{ user.lastName }}</td>
                <td>{{ user.age }}</td>
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
