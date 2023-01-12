<template>
  <div class="content">
    <div class="container-fluid">
      {{ users }}
      <div class="row">
        <div class="col-12">
          <table class="table table-striped" v-if="users.length > 0">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Age</th>
              <th scope="col">Ville</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="user in this.users" :key="user.id" v-on:click="$router.push('/admin/user/' + user.nationalId.toString())">
                <th scope="row">{{ user.nationalId }}</th>
                <td>{{ user.firstName.split(" ")[0] }} {{ user.lastName }}</td>
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
  import axios from "axios";
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        users: []
      }
    },
    methods: {
      retrieveUsers: function () {
        this.users = [];
        axios.get("http://192.168.3.111:3000/people")
          .then((response) => {
            console.log(response.data);
            this.users = response.data;
          })
          .catch((errors) => {
            console.log(errors);
          });
      }
    },
    mounted() {
      this.retrieveUsers();
    }
  }
</script>
<style>
</style>
