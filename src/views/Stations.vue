<template>
  <div>

    <b-card
      v-for="station in stations"
      :key="station.id"
      :title=" station.name "
      img-alt="Card image"
      img-left class="mb-3">
      <b-card-text>
        <p>{{ station.description }}</p>
        <p>{{ station.gasoils.length }} relevés</p>

      </b-card-text>
      <b-button   variant="outline-primary">
        <router-link
          :to="{ path: `/station/${station.id}`}">
          Mettre a jour la station
        </router-link>
        </b-button>
    </b-card>
  </div>

</template>

<script>

import Stations from '../services/stations.service';

export default {
  name: 'Stations',
  data() {
    return {
      stations: null,
    };
  },
  created() {
    Stations.getAllStations().then((res) => {
      this.stations = res;
    });
  },
};
</script>

<style scoped>

</style>
