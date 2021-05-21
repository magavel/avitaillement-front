<template>
  <div>
    <div v-if="displaySpinner">
      <p>
        Téléchargement des stations en cours....
      </p>
      <p>
        Serveur gratuit == temps de latence long
      </p>

    </div>
    <div class="m-3">
      <b-button @click="dispAddStation">Ajouter une station</b-button>
      <div v-if="displayAddStation" class="m-3">
        <NewStation
          @add-new-station="addStation"
        />
      </div>
    </div>

    <b-card
      v-for="station in stations"
      :key="station.id"
      :title=" station.name "
      img-alt="Card image"
      img-left
      class="mb-3 mx-3">
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

import NewStation from '@/components/NewStation.vue';
import Stations from '../services/stations.service';

export default {
  name: 'Stations',
  components: { NewStation },
  data() {
    return {
      displaySpinner: false,
      displayAddStation: false,
      stations: null,
    };
  },
  created() {
    this.displaySpinner = true;
    Stations.getAllStations().then((res) => {
      this.stations = res;
      this.displaySpinner = false;
    });
  },
  methods: {
    dispAddStation() {
      this.displayAddStation = true;
    },
    addStation(station) {
      console.log(station);
      Stations.createStation(station).then((res) => {
        console.log(res);
      });
      this.displayAddStation = false;
    },
  },
};
</script>

<style scoped>

</style>
