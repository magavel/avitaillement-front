/* eslint-disable vue/valid-v-for */
<template>

  <div>
    <div style="height: 20%; overflow: auto;">
      <h3>Carte des stations d'avitaillement carburants</h3>

    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-tile-layer :url="'https://t1.openseamap.org/seamark/{z}/{x}/{y}.png'"></l-tile-layer>
      <!-- Create HTML icon (divIcon) by providing content inside the l-icon tag -->
        <l-marker
          v-for="station in stationReportService"
          :key="station.id"
          :lat-lng="[station.latitude, station.longitude]">
          <l-icon
            :icon-anchor="staticAnchor"
            class-name="someExtraClass"
          >
            <div class="headline">
              <h3>{{ station.name }}</h3>
            </div>
            <div v-if="station.gasoils">
              <p >Gasoil:
                {{ station.gasoils.price }} €
              </p>
              <p>
                {{ station.gasoils.published_at | moment("from", "now") }}
              </p>
            </div>
          <div v-else> Pas de données</div>

          </l-icon>
        </l-marker>
    </l-map>
  </div>
</template>

<script>
import {
  LMap, LTileLayer, LMarker, LIcon,
} from 'vue2-leaflet';
import { latLng, icon } from 'leaflet';
import Stations from '../services/stations.service';

export default {
  name: 'Icon',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      stationReportService: null,
      zoom: 13,
      center: latLng(43.0841322, 5.8),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        'Avel',

      icon: icon({
        iconUrl: 'static/images/baseball-marker.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      staticAnchor: [16, 37],
      customText: 'Le Brusc',
      iconSize: 64,
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
    stations() {
      return this.$store.state.stations;
    },
  },
  created() {
    Stations.getAllStationsWithLastReport().then((res) => {
      this.stationReportService = res;
    });
  },
  methods: {

  },
};
</script>

<style>
.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>
