<template>
  <card class="card-user">
    <div class="row">
      <div class="col-md-4">
        <img
          slot="image"
          src="../../assets/img/logo-gouv.png"
          alt="gouv"
          style="width: 100%"
        />
      </div>
      <div class="col-md"></div>
    </div>
    <div class="author">
      <a href="#">
        <img
          class="avatar border-gray"
          :src="'https://intensif06.ensicaen.fr/api/uploads/' + this.user.photo"
          :alt="this.user.name"
        />

        <h4 class="title">
          {{ this.user.firstNames.split(" ")[0] }} {{ this.user.lastName
          }}<br />
          <small>Nat. ID : {{ this.user.nationalId }}</small>
        </h4>
      </a>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <base-input
              type="text"
              label="Nom"
              :disabled="true"
              placeholder="Nom"
              v-model="user.lastName"
            >
            </base-input>
          </div>
          <div class="col">
            <base-input
              type="text"
              label="Prénom"
              :disabled="true"
              placeholder="Prénom"
              v-model="user.firstNames.split(' ')[0]"
            >
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <base-input
              type="text"
              label="Prénom n°2"
              :disabled="true"
              placeholder="Prénom n°2"
              v-model="user.firstNames.split(' ')[1]"
            >
            </base-input>
          </div>
          <div class="col">
            <base-input
              type="text"
              label="Prénom n°3"
              :disabled="true"
              placeholder="Prénom n°3"
              v-model="user.firstNames.split(' ')[2]"
            >
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <base-input
              type="text"
              label="Date de naissance"
              :disabled="true"
              placeholder="Date de naissance"
              v-model="user.dateOfBirth"
            >
            </base-input>
          </div>
          <div class="col">
            <base-input
              type="text"
              label="Lieu de naissance"
              :disabled="true"
              placeholder="Lieu de naissance"
              v-model="user.placeOfBirth"
            >
            </base-input>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-md-8">
            <label>Empreintes</label>
            <img
              slot="image"
              :src="
                'https://intensif06.ensicaen.fr/api/uploads/' +
                this.user.fingerprints
              "
              alt="empreintes"
              style="width: 100%"
            />
          </div>
          <div class="col-md">
            <label>Iris</label>
            <img
              slot="image"
              :src="
                'https://intensif06.ensicaen.fr/api/uploads/' + this.user.iris
              "
              alt="iris"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import Card from "src/components/Cards/Card.vue";
export default {
  components: {
    Card,
  },
  props: ["user"],
};
</script>
<style>
</style>
