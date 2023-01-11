<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <edit-profile-form :user="user"/>
        </div>
        <div class="col-md-4">
          <user-card :user="user"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import usersList from '../dataset/users.json'
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'

  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data () {
      return {
        user: {
          id: 0,
          name: 'Inconnu',
          city: 'N/A'
        }
      }
    },
    mounted() {
      for(let usr of usersList) {
        if(usr.id === parseInt(this.$route.params.id)) {
          this.user = usr;
          break;
        }
      }
    }
  }

</script>
<style>

</style>
