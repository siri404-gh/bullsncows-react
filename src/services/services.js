import axios from 'axios';

const Services = {
  updatePoints(points, userId, lastword) {
    return axios.post('/points', {
      userId,
      points,
      lastword
    });
  },
  getPoints(userId) {
    return axios.get('/points/'+userId);
  }
};

export default Services;
