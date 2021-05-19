<template>
  <div class="d-flex flex-column justify-content-between">
    <b-card v-if="station"
            :title="station.name"
            img-src="https://picsum.photos/290/290/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
      position: {{ station.latitude }}, {{ station.longitude }}
      Liste des relevés de gasoil
      <div v-for="item in station.gasoils" :key="item.id">
        {{ item.price }} € {{ item.published_at | moment("from", "now")}}

      </div>
      <div  v-if="!adminAddValue">
        <b-button @click="addValue" size="sm">Ajouter un relevé</b-button>
      </div>

      <div v-if="adminAddValue">
        Saisir le prix:
        <input v-model="newPrice" type="number">
        <b-button @click="createValue(station.id)" size="sm">Enregistrer</b-button>
      </div>
    </b-card>
  </div>

</template>

<script>
import Stations from '@/services/stations.service';
import Gasoil from '@/services/gasoil.service';
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  name: 'Station',
  data() {
    return {
      newPrice: null,
      adminAddValue: false,
      station: null,
    };
  },

  created() {
    Stations.getStation(this.$route.params.id).then((res) => {
      this.station = res;
    });
  },
  methods: {
    addValue() {
      this.adminAddValue = true;
    },
    createValue() {
      const report = {
        price: this.newPrice,
        station: this.$route.params.id,
      };
      console.log('report', report);
      Gasoil.createReport(report).then((res) => {
        console.log(res);
        this.station.gasoils.push(res.data);
      });
      this.newPrice = null;
      this.adminAddValue = false;
    },
  },
};
</script>

<style scoped>

</style>
