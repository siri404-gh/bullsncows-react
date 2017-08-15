import Services from '../../services/services';
import { partial } from '../../utils/utils';
import { toggleLoading } from '../loading/loadingActions';

export const getUsersRoot = (getUsersService) => dispatch => {
  dispatch(toggleLoading(true));
  return getUsersService()
    .then(response => {
      var dataParsed = [];
      for (var user in response.data.users) {
        dataParsed.push({
          user: user,
          displayName: response.data.users[user].displayName,
          points: response.data.users[user].points,
          words: response.data.users[user].words
        });
      }
      dispatch({
        type: 'ADD_USERS',
        users: dataParsed
      });
      dispatch(toggleLoading(false));
    })
    .catch(response => {
      console.log('e3', response);
    });
};
export const getUsers = partial(getUsersRoot, Services.getUsers);

