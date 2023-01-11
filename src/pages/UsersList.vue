<template>
  <div class="content">
    <div class="container-fluid">
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Age</th>
          <th scope="col">Ville</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="user in usersList" :key="user.id" v-on:click="$router.push('/admin/user/' + user.id.toString())">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import usersList from '../dataset/users.json'
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        usersList: usersList
      }
    }
  }
</script>
<style>
</style>
