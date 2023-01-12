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
        <l-table
          :data="tableData.data"
          :columns="tableData.columns"
          class="table table-striped"
        >
          <template slot="columns"></template>

          <template slot-scope="{ row }">
            <td>
              Dénonciations de {{ row.from }} à l'encontre de {{ row.target }}.
              <br />
              La raison est : {{ row.reason }}
            </td>
            <td class="td-actions text-right">
              <button
                type="button"
                class="btn-simple btn btn-success"
                v-tooltip.top-center="editTooltip"
              >
                <i class="fa fa-check"></i>
              </button>
              <button
                type="button"
                class="btn-simple btn btn-danger"
                v-tooltip.top-center="deleteTooltip"
              >
                <i class="fa fa-times"></i>
              </button>
            </td>
          </template>
        </l-table>
      </card>
    </div>
  </div>
</template>
<script>
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
      tableData: {
        data: [
          {
            from: "Marie Dupont",
            target: "Jean-Luc Verie",
            reason:
              "Utilisation régulière de sa voiture pour des trajets court",
          },
          {
            from: "Geannie Weasley",
            target: "Ron Weasley",
            reason: "Laisse ces appareils branchés durant ces absences.",
          },
          {
            from: "Veronique Martin",
            target: "Pierre Dublin",
            reason: "Monsieur Dublin met sa température à 25°C",
          },
          {
            from: "Miles Perso",
            target: "Karen Test",
            reason: "Karen ne trie pas ces déchets correctement",
          },
          {
            from: "Matthieu Broue",
            target: "Virginie LeTest",
            reason:
              "Madame LeTest, refuse de prendre les escaliers pour monter les marches ",
          },
          {
            from: "Grégorie Jardin",
            target: "Jean Marchal",
            reason: "Jean n'éteint pas sa télévision lorsqu'il va dormir",
          },
        ],
      },
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notifications.notify({
        message: `<span>Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.</span>`,
        icon: "nc-icon nc-app",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },
  },
};
</script>
<style lang="scss">
</style>
