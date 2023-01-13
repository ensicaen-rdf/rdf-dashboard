<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <p class="col-xl-3">{{ day }} 2050</p>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <img src="../assets/img/industry-icon.png" />
            </div>
            <div slot="content">
              <p class="card-category">Production d'électricité</p>
              <h4 class="card-title text-info">68 GWh</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar"></i> Sur 30 jours glissants
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <img src="../assets/img/electricity-icon.png" />
            </div>
            <div slot="content">
              <p class="card-category">Consommation d'électricité</p>
              <h4 class="card-title text-danger">458 GWh</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar"></i> Sur 30 jours glissants
            </div>
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
              <h4 class="card-title text-info">77 kWh</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar"></i> Sur 30 jours glissants
            </div>
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
              <h4 class="card-title text-danger">489 kWh</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar"></i> Sur 30 jours glissants (en kWh)
            </div>
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
                Consommation et production électrique moyenne par foyer sur
                l'année en cours <small>(en kWh)</small>
              </h4>
              <p class="card-category">Résultat sur 12 mois glissants</p>
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
              <div
                class="alert alert-danger"
                role="alert"
                v-if="this.$parent.usersRank.length === 0"
              >
                Aucun citoyen trouvé...
              </div>
              <table class="table table-striped" v-else>
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
                    v-for="(user, index) in this.$parent.usersRank.slice(0, 5)"
                    :key="user.id"
                    v-on:click="
                      $router.push('/admin/user/' + user.id.toString())
                    "
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.firstNames.split(" ")[0] }}</td>
                    <td>{{ user.csse }}</td>
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
                Consommation et production électrique en France sur l'année en
                cours <small>(en GWh)</small>
              </h4>
              <p class="card-category">
                Résultat sur 12 mois glissants
              </p>
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
export default {
  components: {
    LTable,
    ChartCard,
    StatsCard,
  },
  data() {
    return {
      day: dayjs().locale(locale).format("D MMMM"),
      editTooltip: "Edit Task",
      deleteTooltip: "Remove",
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
            [79, 84, 81, 75, 68, 71, 65, 62, 57, 64, 76, 85],
            [490, 500, 487, 470, 478, 483, 473, 468, 454, 432, 384, 359],
          ],
        },
        options: {
          low: 0,
          high: 600,
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
            [56, 63, 88, 82, 68, 62, 64, 58, 74, 67, 78, 90],
            [515, 489, 452, 417, 382, 377, 353, 418, 384, 332, 284, 259],
          ],
        },
        options: {
          low: 0,
          high: 600,
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
};
</script>
<style>
</style>
