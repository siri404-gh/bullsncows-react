import Services from '../../services/services';
import { partial } from '../../utils/utils';
import { getUsers } from '../users/usersActions';
import { toggleLoading } from '../loading/loadingActions';

export const updatePointsRoot = (updatePoints, points, userId, lastword, displayName) => dispatch => {
  dispatch(toggleLoading(true));
  return updatePoints(points, userId, lastword, displayName)
    .then(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points
      });
      dispatch(getUsers());
      dispatch(toggleLoading(false));
    })
    .catch(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points
      });
      dispatch(toggleLoading(false));
    });
};

export const updatePoints = partial(updatePointsRoot, Services.updatePoints);
