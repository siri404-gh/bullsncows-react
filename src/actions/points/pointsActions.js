import Services from '../../services/services';
import { partial } from '../../utils/utils';

export const updatePointsRoot = (updatePoints, points, userId, lastword) => dispatch => {
  return updatePoints(points, userId, lastword)
    .then(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points
      });
    })
    .catch(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points
      });
    });
};

export const updatePoints = partial(updatePointsRoot, Services.updatePoints);
