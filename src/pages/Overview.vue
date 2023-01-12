<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <p class="col-xl-3">{{ day }}</p>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <img src="../assets/img/industry-icon.png" />
            </div>
            <div slot="content">
              <p class="card-category">Production mensuel d'électricité</p>
              <h4 class="card-title">70 GWh</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Actualiser</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <img src="../assets/img/electricity-icon.png" />
            </div>
            <div slot="content">
              <p class="card-category">Consommation mensuel d'électricité</p>
              <h4 class="card-title">35910 GWh</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Actualiser</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <img src="../assets/img/house-icon.png" />
            </div>
            <div slot="content">
              <p class="card-category">
                Production moyenne d'électricité par foyer
              </p>
              <h4 class="card-title">90 kWh</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Actualiser</div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <img src="../assets/img/electric-consume.png" />
            </div>
            <div slot="content">
              <p class="card-category">
                Consommation moyenne d'électricité par foyer
              </p>
              <h4 class="card-title">390 kWh</h4>
            </div>
            <div slot="footer"><i class="fa fa-refresh"></i>Actualiser</div>
          </stats-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card
            :chart-data="lineChart.data"
            :chart-options="lineChart.options"
            :responsive-options="lineChart.responsiveOptions"
          >
            <template slot="header">
              <h4 class="card-title">
                Evolution de la consommation et production électrique moyenne
                par foyer depuis janvier
              </h4>
              <p class="card-category">Résultat mensuel</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Production moyenne
                d'électricité par foyer
                <i class="fa fa-circle text-danger"></i> Consommation moyenne
                d'électricité par foyer
              </div>
              <hr />
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Classement</h4>
              <p class="card-category">
                Top 5 des meilleurs citoyens contribuant à la production
                d'électricité
              </p>
            </template>
            <div class="container-fluid">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Rang</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Score</th>
                    <th scope="col">Ville</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(user, index) in usersRank"
                    :key="user.id"
                    v-on:click="
                      $router.push('/admin/user/' + user.id.toString())
                    "
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.score }}</td>
                    <td>{{ user.city }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <chart-card
            :chart-data="lineChart2.data"
            :chart-options="lineChart2.options"
            :responsive-options="lineChart2.responsiveOptions"
          >
            <template slot="header">
              <h4 class="card-title">
                Evolution de la consommation et production électrique en France
                depuis janvier
              </h4>
              <p class="card-category">Résultat mensuel</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Production d'électricité
                en France <i class="fa fa-circle text-danger"></i> Consommation
                d'électricité en France
              </div>
              <hr />
            </template>
          </chart-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import * as locale from "dayjs/locale/fr";
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";
import usersList from "../dataset/users.json";

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
  },
  data() {
    return {
      day: dayjs().locale(locale).format("dddd, D MMMM YYYY"),
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
      usersRank: [],
      lineChart: {
        data: {
          labels: [
            "Jan",
            "Fév",
            "Mars",
            "Avr",
            "Mai",
            "Juin",
            "Juil",
            "Aout",
            "Sept",
            "Oct",
            "Nov",
            "Déc",
          ],
          series: [
            [
              230, 1130, 670, 1080, 1900, 2390, 3070, 3080, 1130, 670, 1080,
              1900,
            ],
            [
              1020, 2560, 3400, 2100, 2500, 2680, 3800, 4000, 1020, 2560, 3400,
              2100,
            ],
          ],
        },
        options: {
          low: 0,
          high: 5000,
          showArea: false,
          height: "250px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      lineChart2: {
        data: {
          labels: [
            "Jan",
            "Fév",
            "Mars",
            "Avr",
            "Mai",
            "Juin",
            "Juil",
            "Aout",
            "Sept",
            "Oct",
            "Nov",
            "Déc",
          ],
          series: [
            [
              8500, 8600, 8900, 8500, 7700, 8000, 7500, 7000, 7200, 7600, 7800,
              8000,
            ],
            [
              18500, 18600, 18900, 18500, 17700, 18000, 17500, 17000, 17200,
              17600, 17800, 18000,
            ],
          ],
        },
        options: {
          low: 0,
          high: 20000,
          showArea: false,
          height: "250px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              axisX: {
                labelInterpolationFnc(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
    };
  },
  methods: {
    usersListRank: function () {
      //let usersListCopy = [];
      this.usersRank = JSON.parse(JSON.stringify(usersList));
      this.usersRank.sort(function (a, b) {
        return b.score - a.score;
      });
    },
  },
  mounted() {
    this.usersListRank();
  },
};
</script>
<style>
</style>
