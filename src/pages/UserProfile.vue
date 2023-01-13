<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <general-profile :user="user"/>
          <personal-profile :user="user"/>
        </div>
        <div class="col-md-4">
          <user-card :user="user"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data"
                      :chart-options="lineChart.options"
                      :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">24H</h4>
              <p class="card-category">Production et consommation d'électricité des dernières 24 heures (en kWh)</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Mis à jour maintenant
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChartWeek.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">7 jours</h4>
              <p class="card-category">Production et consommation d'électricité sur 7 jours glissants (en kWh)</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Mis à jour il y a 1 heure
              </div>
            </template>
          </chart-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">2050</h4>
              <p class="card-category">Production et consommation d'électricité sur l'année 2050 (en kWh)</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Mis à jour il y a 1 jour
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChartMonth.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">30 jours</h4>
              <p class="card-category">Production et consommation d'électricité sur 30 jours glissants (en kWh)</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Mis à jour il y a 1 jour
              </div>
            </template>
          </chart-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <user-localization :localization="userLocalisation"/>
        </div>
        <div class="col-md-4">
          <card>
            <h4 slot="header" class="card-title">Points du CSSE <small>(score mensuel)</small></h4>
            <div class="text-center text-info">
              <h1>{{ this.user.csse }}</h1>
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-history"></i> Mis à jour maintenant
            </div>
          </card>
          <card>
            <h4 slot="header" class="card-title">Nombre de pas <small>(quotidien)</small></h4>
            <div class="text-center text-danger">
              <h1>{{ this.userSteps }}</h1>
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-history"></i> Mis à jour maintenant
            </div>
          </card>

          <card>
            <h4 slot="header" class="card-title">Vidéo surveillance</h4>
            <VideoStream controls src="http://193.252.216.214:80/oneshotimage1?COUNTER"/>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import GeneralProfile from './UserProfile/GeneralProfile.vue'
  import PersonalProfile from './UserProfile/PersonalProfile.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import UserLocalization from './UserProfile/UserLocalization.vue'
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import axios from "axios";
  import { VideoStream } from 'stream-vue';
  const delay = require('delay');

  export default {
    components: {
      GeneralProfile,
      PersonalProfile,
      UserCard,
      UserLocalization,
      ChartCard,
      VideoStream
    },
    data () {
      return {
        user: {
          idPerson: "0",
          lastName: "Inconnu",
          firstNames: "Inconnu",
          dateOfBirth: "AAAA-MM-JJ",
          placeOfBirth: "N/A",
          nationalId: "N/A",
          address: "N/A",
          city: "N/A",
          country: "N/A",
          eyesColour: "N/A",
          height: "N/A",
          weight: "N/A",
          photo: "N/A",
          iris: "N/A",
          fingerprints: "N/A",
          socialSecurityNumber: "N/A",
          pathologies: "N/A",
          bloodType: "N/A",
          bloodRhesus: "N/A",
          placeOfWork: "N/A",
          companyName: "N/A",
          csse: "N/A"
        },
        userSteps: "N/A",
        userLocalisation: {
          idPerson: "0",
          latitude: 0,
          longitude: 0
        },
        lineChart: {
          data: {
            labels: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00', '3:00', '6:00'],
            series: [
              [
                0.16, 0.89, 0.24, 0.75, 0.64, 0, 0, 0,
              ],
              [
                0.09, 0.26, 0.1, 0.18, 0.12, 0, 0.02, 0,
              ],
            ]
          },
          options: {
            low: 0,
            high: 1,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          data: {
            labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
            series: [
              [
                1332, 1241, 1131, 1033, 1015, 929, 824, 724, 721, 815, 811, 702,
              ],
              [
                614, 582, 563, 535, 549, 532, 515, 475, 429, 314, 383, 277
              ],
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        pieChartWeek: {
          data: {
            labels: ['42 kWh', '8 kWh'],
            series: [42, 8]
          }
        },
        pieChartMonth: {
          data: {
            labels: ['191 kWh', '48 kWh'],
            series: [191, 48]
          }
        }
      }
    },
    methods: {
      retrieveUser: async function () {
        for(let usr of this.$parent.usersList) {
          if(usr.idPerson === this.$route.params.id) {
            this.user = usr;
            break;
          }
        }

        if(this.user.nationalId === "N/A") {
          await axios.get("https://intensif06.ensicaen.fr/api/people/" + this.$route.params.id)
            .then((response) => {
              this.user = response.data;
            })
            .catch((errors) => {
              console.log(errors);
            });
        }

        axios.get("https://intensif06.ensicaen.fr/api/people/" + this.$route.params.id + "/steps")
          .then((response) => {
            this.userSteps = response.data;
          })
          .catch((errors) => {
            console.log(errors);
          });

        axios.get("https://intensif06.ensicaen.fr/api/people/" + this.$route.params.id + "/localisation")
          .then((response) => {
            this.userLocalisation = response.data;
          })
          .catch((errors) => {
            console.log(errors);
          });
      },
      updateCSSE: async function () {
        await delay(10000);
        await axios.get("https://intensif06.ensicaen.fr/api/people/" + this.$route.params.id + "/csse")
          .then((response) => {
            this.user.csse = response.data;
          })
          .catch((errors) => {
            console.log(errors);
          });
        await this.updateCSSE();
      },
      updateSteps: async function () {
        await delay(10000);
        await axios.get("https://intensif06.ensicaen.fr/api/people/" + this.$route.params.id + "/steps")
          .then((response) => {
            this.userSteps = response.data;
          })
          .catch((errors) => {
            console.log(errors);
          });
        await this.updateCSSE();
      },
      updateLocalisation: async function () {
        await delay(10000);
        await axios.get("https://intensif06.ensicaen.fr/api/people/" + this.$route.params.id + "/localisation")
          .then((response) => {
            this.userLocalisation = response.data;
          })
          .catch((errors) => {
            console.log(errors);
          });
        await this.updateLocalisation();
      }
    },
    async mounted() {
      await this.retrieveUser();
      this.updateCSSE();
      this.updateSteps();
      this.updateLocalisation();

    }
  }

</script>
<style>

</style>
