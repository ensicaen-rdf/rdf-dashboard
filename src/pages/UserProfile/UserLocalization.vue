<template>
  <div class="card" style="min-height: 600px;">
    <div class="card-body">
      <h4 slot="header" class="card-title">Géolocalisation</h4>
      <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
      >
        <l-tile-layer
          :url="url"
        >
        </l-tile-layer>
        <l-marker
          v-for="marker in this.markers"
          :key="marker.id"
          :lat-lng="marker.coordinates"
        >
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 49.1193089, 6.1757156 ],
      zoom: 12,
      markers: [
        {id: 1, coordinates: [ 49.114910, 6.178810 ]},
      ]
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
      console.log(this.markers)
    },
    centerUpdated (center) {
      this.center = center;
    }
  }
}
</script>

<style scoped>
.map {
  position: absolute;
  width: 95%;
  height: 85%;
  overflow: hidden;
}
</style>
