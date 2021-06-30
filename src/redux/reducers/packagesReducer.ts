import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';

interface PackageState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: PackageState, action: Action): PackageState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_PACKAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_PACKAGES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
