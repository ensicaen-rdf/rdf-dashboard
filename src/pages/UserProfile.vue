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
              <p class="card-category">Production et consommation d'électricité des dernières 24 heures</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated now
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChartWeek.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">7 jours</h4>
              <p class="card-category">Production et consommation d'électricité sur 7 jours glissants</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 1 hour ago
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
              <p class="card-category">Production et consommation d'électricité sur l'année 2050</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 1 day ago
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChartMonth.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">30 jours</h4>
              <p class="card-category">Production et consommation d'électricité sur 30 jours glissants</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Consommation
                <i class="fa fa-circle text-danger"></i> Production
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 1 day ago
              </div>
            </template>
          </chart-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <user-localization/>
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

  export default {
    components: {
      GeneralProfile,
      PersonalProfile,
      UserCard,
      UserLocalization,
      ChartCard
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
          companyName: "N/A"
        },
        lineChart: {
          data: {
            labels: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00', '3:00', '6:00'],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695],
              [67, 152, 143, 240, 287, 335, 435, 437],
            ]
          },
          options: {
            low: 0,
            high: 800,
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
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895].reverse(),
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695].reverse()
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
            labels: ['42 kWh', '14 kWh'],
            series: [42, 14]
          }
        },
        pieChartMonth: {
          data: {
            labels: ['420 kWh', '140 kWh'],
            series: [420, 140]
          }
        }
      }
    },
    methods: {
      retrieveUser: function () {
        for(let usr of this.$parent.usersList) {
          if(usr.idPerson === this.$route.params.id) {
            this.user = usr;
            break;
          }
        }

        if(this.user.nationalId === "N/A") {
          axios.get("https://intensif06.ensicaen.fr/api/people/" + this.$route.params.id)
            .then((response) => {
              this.user = response.data;
            })
            .catch((errors) => {
              console.log(errors);
            });
        }
      }
    },
    mounted() {
      this.retrieveUser();
    }
  }

</script>
<style>

</style>
