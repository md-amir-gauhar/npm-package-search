import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const searchPackages = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_PACKAGES,
    });

    try {
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_PACKAGES_ERROR,
        payload: err.message,
      });
    }
  };
};
