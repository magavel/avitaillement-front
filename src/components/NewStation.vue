<template>
  <div>
    <div class="d-flex flex-column">
      <form>
        <div class="form-group">
          <Label>Nom de la station</Label>
          <input class="form-control" type="text" v-model="name">
        </div>
        <div>
          <Label>Description de la station</Label>
          <textarea class="form-control" type="text" v-model="description"></textarea>
        </div>
        <div class="form-group">
          <Label>Latitude</Label>
          <input class="form-control" type="text" v-model="latitude">
        </div>
        <div class="form-group">
          <Label>Longitude</Label>
          <input class="form-control" type="text" v-model="longitude">
        </div>

      </form>
    </div>
    <div>
      <MiniMap
        @new-position="newPosition"
      />
    </div>
    <b-button @click="valider">Valider</b-button>
  </div>

</template>

<script>
import MiniMap from '@/components/MiniMap.vue';

export default {
  name: 'NewStation',
  components: { MiniMap },
  data() {
    return {
      name: null,
      description: null,
      latitude: null,
      longitude: null,
    };
  },
  methods: {
    newPosition(position) {
      this.longitude = position.lng;
      this.latitude = position.lat;
    },
    valider() {
      const station = {
        name: this.name,
        description: this.description,
        latitude: this.latitude,
        longitude: this.longitude,
      };
      this.$emit('add-new-station', station);
    },
  },
};
</script>

<style scoped>

</style>
