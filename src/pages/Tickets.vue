<template>
  <div class="content">
    <div class="col-md-12">
      <card>
        <template slot="header">
          <h2 class="title">Validation des dénonciations des citoyens</h2>
          <p class="category-denonce">
            En vertu de la loi, article 226-10 : La dénonciation, effectuée par
            tout moyen et dirigée contre une personne déterminée, d'un fait qui
            est de nature à entraîner des sanctions, lorsqu'elle est adressée à
            une autorité ayant le pouvoir d'y donner suite. La fausseté du fait
            dénoncé résulte nécessairement de la décision, devenue définitive,
            d'acquittement, de relaxe ou de non-lieu, déclarant que le fait n'a
            pas été commis ou que celui-ci n'est pas imputable à la personne
            dénoncée. En tout autre cas, le tribunal saisi des poursuites contre
            le dénonciateur apprécie la pertinence des accusations portées par
            celui-ci.
          </p>
        </template>


        <div class="alert alert-warning" role="alert" v-if="this.tickets.length === 0">
          Aucune demande n'a été trouvée...
        </div>
        <table class="table table-striped" v-else>
          <thead>
            <tr>
              <th scope="col" class="col-md-3">Citoyen dénoncé</th>
              <th scope="col" class="col-md">Raison</th>
              <th scope="col" class="col-md-3">Décision</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="(ticket, index) in this.tickets" :key="ticket.idReport" >
            <td>
              {{ ticket.idPersonTarget }}
            </td>
            <td>
              {{ ticket.reason }}
            </td>
            <td class="td-actions text-right">
              <button
                type="button"
                class="btn-simple btn btn-success"
                v-on:click="checkTicket(index, ticket.idReport, true)"
              >
                <i class="fa fa-check"></i>
              </button>
              <button
                type="button"
                class="btn-simple btn btn-danger"
                v-on:click="checkTicket(index, ticket.idReport, false)"
              >
                <i class="fa fa-times"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </card>
    </div>
  </div>
</template>
<script>
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";
import axios from "axios";

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
  },
  data() {
    return {
      tickets: [],
    };
  },
  methods: {
    retrieveTickets: function () {
      axios.get("https://intensif06.ensicaen.fr/api/report")
        .then((response) => {
          let ticketsList = response.data;
          for(let i = 0; i < ticketsList.length; i++) {
            axios.get("https://intensif06.ensicaen.fr/api/people/" + ticketsList[i].idPersonTarget)
              .then((response) => {
                ticketsList[i].idPersonTarget = response.data.firstNames.split(" ")[0] + " " + response.data.lastName;
              })
              .catch((errors) => {
                console.log(errors);
              });
          }
          this.tickets = ticketsList;
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    checkTicket: function (index, id, state) {
      let data = {
        idReport: id,
        isValid: state,
        nbPoints: 10
      }
      axios.post("https://intensif06.ensicaen.fr/api/report/validate", data)
        .then(() => {
          if(this.tickets.length > 1) {
            let ticketsCopy = JSON.parse(JSON.stringify(this.tickets));
            this.tickets = [];
            for(let i = 0; i < ticketsCopy.length; i++) {
              if(i !== index) {
                this.tickets.push(ticketsCopy[i]);
              }
            }
          }
          else
            this.tickets = [];
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  },
  mounted() {
    this.retrieveTickets();
  }
};
</script>
<style lang="scss">
</style>
