import Services from '../../services/services';
import { addLastWord } from '../lastword/lastwordActions';

const partial = (fn, ...args) => (...restArgs) => fn.apply(this, args.concat(restArgs));
const createAction = type => payload => ({ type, payload });

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

export const getPointsRoot = (getPointsService, userId) => dispatch => {
  return getPointsService(userId)
    .then(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points: response.data.points
      });
      dispatch(addLastWord(response.data.words.pop()));
    })
    .catch(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points: 0
      });
    });
};

export const updatePoints = partial(updatePointsRoot, Services.updatePoints);
export const getPoints = partial(getPointsRoot, Services.getPoints);
