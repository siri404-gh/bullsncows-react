import Services from '../../services/services';
import { partial } from '../../utils/utils';
import { addAllWords } from '../words/wordsActions';
import { toggleLoading } from '../loading/loadingActions';
import { setLevel } from '../level/levelActions';
import { addNewWord } from '../theWord/theWordActions';

export const getDetailsRoot = (getDetailsService, userId) => dispatch => {
  dispatch(toggleLoading(true));
  return getDetailsService(userId)
    .then(response => {
      dispatch({
        type: 'UPDATE_POINTS',
        points: response.data.points
      });
      dispatch(setLevel(response.data.level));
      dispatch(addAllWords(response.data.words));
      dispatch(addNewWord(response.data.level));
      // dispatch(toggleLoading(false));
    })
    .catch(response => {
      console.log('details', response);
    });
};
export const getDetails = partial(getDetailsRoot, Services.getDetails);
