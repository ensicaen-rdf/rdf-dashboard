<template>
  <div class="card" style="min-height: 600px;">
    <div class="card-body">
      <h4 slot="header" class="card-title">Géolocalisation</h4>
      <div class="d-flex justify-content-center" v-if="this.localization.latitude === 0 || this.localization.longitude === 0">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
        <l-map
          :zoom="zoom"
          :center="[this.localization.latitude, this.localization.longitude]"
          :options="mapOptions"
          :style="'height: 500px'"
        >
          <l-control-layers position="topright"  ></l-control-layers>
          <l-tile-layer
            v-for="tileProvider in tileProviders"
            :key="tileProvider.name"
            :name="tileProvider.name"
            :visible="tileProvider.visible"
            :url="tileProvider.url"
            :attribution="tileProvider.attribution"
            layer-type="base"
          />
          <l-marker :lat-lng="[this.localization.latitude, this.localization.longitude]">
            <l-popup>{{ this.localization.latitude }}, {{ this.localization.longitude }}</l-popup>
          </l-marker>
        </l-map>
        <div class="stats m-3">
          <i class="fa fa-history"></i> Mis à jour maintenant
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControlLayers, LMarker, LPopup, LIcon } from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';

export default {
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LMarker,
    LPopup,
  },
  props: ["localization"],
  data () {
    return {
      zoom: 13,
      tileProviders: [
        {
          name: 'OpenStreetMap',
          visible: true,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
          name: 'Stadia AlidadeSmoothDark',
          visible: false,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        },
        {
          name: 'Stadia Outdoors',
          visible: false,
          url: 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
      ],
      mapOptions: {
        zoomSnap: 0.5
      }
    }
  },
}
</script>

<style scoped>

</style>
