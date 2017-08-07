import axios from 'axios';
const Services = {
  updatePoints(points, userId, word) {
    return axios.post('/points', {
      userId,
      points,
      word
    });
  }
};

export default Services;
