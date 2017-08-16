import axios from 'axios';

const Services = {
  updatePoints(points, userId, lastword, displayName, level) {
    return axios.post('/points', {
      userId,
      points,
      lastword,
      displayName,
      level
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
