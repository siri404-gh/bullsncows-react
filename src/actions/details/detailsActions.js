import Services from '../../services/services';
import { partial } from '../../utils/utils';
import { addAllWords } from '../words/wordsActions';
import { toggleLoading } from '../loading/loadingActions';

export const getDetailsRoot = (getDetailsService, userId) => dispatch => {
  return getDetailsService(userId)
    .then(response => {
      dispatch(toggleLoading(true));
      dispatch({
        type: 'UPDATE_POINTS',
        points: response.data.points
      });
      dispatch(addAllWords(response.data.words));
      dispatch(toggleLoading(false));
    })
    .catch(response => {
    });
};
export const getDetails = partial(getDetailsRoot, Services.getDetails);
