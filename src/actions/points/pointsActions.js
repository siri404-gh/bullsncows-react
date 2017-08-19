import Services from '../../services/services';
import { partial } from '../../utils/utils';
import { getUsers } from '../users/usersActions';
import { toggleLoading } from '../loading/loadingActions';

export const updatePointsRoot = (updatePoints, points, userId, lastword, displayName, level) => dispatch => {
  // dispatch(toggleLoading(true));
  return updatePoints(points, userId, lastword, displayName, level)
    .then(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points
      });
      dispatch(getUsers());
      // dispatch(toggleLoading(false));
    })
    .catch(response => {
      console.log('points', response);
    });
};

export const updatePoints = partial(updatePointsRoot, Services.updatePoints);
