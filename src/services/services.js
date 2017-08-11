import axios from 'axios';

const Services = {
  updatePoints(points, userId, lastword) {
    return axios.post('/points', {
      userId,
      points,
      lastword
    });
  },
  getDetails(userId) {
    return axios.get('/details/'+userId);
  },
  getUsers() {
    return axios.get('/users');
  }
};

export default Services;
