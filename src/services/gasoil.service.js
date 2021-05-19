import axios from 'axios';
import BaseService from '@/services/base.service';

const baseUrl = 'http://localhost:1337';

class GasoilService extends BaseService {
  // eslint-disable-next-line class-methods-use-this
  async createReport(report) {
    return axios.post(`${baseUrl}/gasoils`, report);
  }
}

export default new GasoilService();
