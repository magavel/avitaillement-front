import axios from 'axios';
import BaseService from '@/services/base.service';

const baseUrl = 'https://avitaillement-back.herokuapp.com';

class GasoilService extends BaseService {
  // eslint-disable-next-line class-methods-use-this
  async createReport(report) {
    return axios.post(`${baseUrl}/gasoils`, report);
  }
}

export default new GasoilService();
