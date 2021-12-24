import { AppActions, IAppAction, IAppState } from './types';

/**
 * reducer - the reducer that redux uses, decides how to update the state
 * @author Red Oral
 */

const defaultState: IAppState = {
  loading: false,
  allMonsters: [],
  monstersByType: [],
  oneMonster: {
    id: 0,
    name: '',
    type: '',
    img: '',
    susceptibility: [],
    loot: [],
  },
};

const reducer = (
  state: IAppState = defaultState,
  action: IAppAction
): IAppState => {
  let newState = { ...state };

  switch (action.type) {
    case AppActions.LOADING:
      newState.loading = action.payload.loading;
      return newState;
    case AppActions.UPDATE_ALL_MONSTERS:
      newState.allMonsters = action.payload.allMonsters;
      return newState;
    case AppActions.UPDATE_MONSTERS_BY_TYPE:
      newState.monstersByType = action.payload.monstersByType;
      return newState;
    case AppActions.UPDATE_MONSTER:
      newState.oneMonster = action.payload.oneMonster;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
