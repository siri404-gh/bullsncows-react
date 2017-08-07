import Services from '../../services/services';

const partial = (fn, ...args) => (...restArgs) => fn.apply(this, args.concat(restArgs));
const createAction = type => payload => ({ type, payload });

export const updatePointsRoot = (updatePoints, points, userId, word) => dispatch => {
  return updatePoints(points, userId, word)
    .then(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points: points
      });
    })
    .catch(response => {
      console.log(response);
    });
};

export const updatePoints = partial(updatePointsRoot, Services.updatePoints);
