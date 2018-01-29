import axios from 'axios';

const Services = {
  updatePoints(points, userId, lastword, displayName, level) {
    return axios.post('https://bullsncows-3d0f8.firebaseapp.com/points', {
      userId,
      points,
      lastword,
      displayName,
      level
    });
  },
  getDetails(userId) {
    return axios.get('https://bullsncows-3d0f8.firebaseapp.com/details/' + userId);
  },
  getUsers() {
    return axios.get('https://bullsncows-3d0f8.firebaseapp.com/users');
  }
};

export default Services;
