import { ActionType } from '../action-types/index';

interface SearchPackagesAction {
  type: ActionType.SEARCH_PACKAGES;
}

interface SearchPackagesSuccessAction {
  type: ActionType.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

interface SearchPackagesErrorAction {
  type: ActionType.SEARCH_PACKAGES_ERROR;
  payload: string;
}

export type Action =
  | SearchPackagesAction
  | SearchPackagesSuccessAction
  | SearchPackagesErrorAction;
