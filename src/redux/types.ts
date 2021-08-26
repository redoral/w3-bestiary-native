/**
 * Monster - the type for our monster object
 * AppActions - actions enum for redux
 * IAppAction - actions interface for redux
 * IAppState - state interface for redux
 * @author Red Oral
 */

export type Monster = {
  id: number;
  name: string;
  type: string;
  image: string;
  susceptibility: [];
  loot: [];
};

export enum AppActions {
  ERROR,
  LOADING,
  UPDATE_ALL_MONSTERS,
  UPDATE_MONSTERS_BY_TYPE,
  UPDATE_MONSTER,
}

export interface IAppAction {
  type: AppActions;
  payload: {
    loading: boolean;
    allMonsters: Monster[];
    monstersByType: Monster[];
    oneMonster: Monster;
  };
}

export interface IAppState {
  loading: boolean;
  allMonsters: Monster[];
  monstersByType: Monster[];
  oneMonster: Monster;
}
