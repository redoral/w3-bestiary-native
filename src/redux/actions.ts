import axios from 'axios';
import { Dispatch } from 'redux';
import { AppActions } from '../redux/types';

export const getAllMonsters = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('http://192.168.1.14:8080/api/v1/monsters');
    dispatch({
      type: AppActions.UPDATE_ALL_MONSTERS,
      payload: { allMonsters: res.data }
    });
  } catch (e) {
    dispatch({
      type: AppActions.LOADING,
      payload: { loading: false }
    });
    console.log(e);
  }
};
