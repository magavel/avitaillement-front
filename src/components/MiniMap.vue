/* eslint-disable vue/valid-v-for */
<template>
  <div>
    <l-map
      ref="miniMap"
      :zoom="zoom"
      :center="center"
      style="height: 300px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-tile-layer :url="'https://t1.openseamap.org/seamark/{z}/{x}/{y}.png'"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import {
  LMap, LTileLayer,
} from 'vue2-leaflet';
import { latLng, icon } from 'leaflet';

export default {
  name: 'MiniMap',
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      positionUser: null,
      stationReportService: null,
      zoom: 12,
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
  },
  created() {
    this.geolalisation();
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.miniMap.mapObject.on('click', (e) => {
        this.$emit('new-position', e.latlng);
      });
    });
  },
  methods: {
    geolalisation() {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    },

    success(position) {
      this.positionUser = position.coords;
      this.center = latLng(position.coords.latitude, position.coords.longitude);
    },
    error() {
      console.log('erreur de loc');
    },

  },
};
</script>

<style>
.someExtraClass {
  background-color: #95d7fd;
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
