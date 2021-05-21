import axios from 'axios';
import BaseService from '@/services/base.service';
import Station from '@/models/station';

// const baseUrl = 'http://localhost:1337';
const baseUrl = 'https://avitaillement-back.herokuapp.com';

class StationsService extends BaseService {
  async getAllStations() {
    const response = await axios.get(`${baseUrl}/stations`);
    super.validateResponse(response);
    console.log(response);

    return Promise.all(response.data.map(async (station) => new Station({
      id: station.id,
      name: station.name,
      latitude: station.latitude,
      longitude: station.longitude,
      gasoils: station.gasoils,
      description: station.description,
    })));
  }

  async getStation(id) {
    const response = await axios.get(`${baseUrl}/stations/${id}`);
    super.validateResponse(response);
    console.log(response.data);

    return new Station({
      id: response.id,
      name: response.data.name,
      latitude: response.data.latitude,
      longitude: response.data.longitude,
      gasoils: response.data.gasoils,
      description: response.data.description,
    });
  }

  async getAllValuesGasoilsByStation(id) {
    const response = await axios.get(`${baseUrl}/stations/${id}/gasoils`);
    super.validateResponse(response);
    console.log(response.data);
    return response.data;
  }

  async getAllStationsWithLastReport() {
    const response = await axios.get(`${baseUrl}/stations`);
    super.validateResponse(response);

    return Promise.all(response.data.map(async (station) => new Station({
      id: station.id,
      name: station.name,
      latitude: station.latitude,
      longitude: station.longitude,
      gasoils: [...station.gasoils].pop(),
    })));
  }

  // eslint-disable-next-line class-methods-use-this
  async createStation(station) {
    return axios.post(`${baseUrl}/stations`, station);
  }
}

export default new StationsService();
