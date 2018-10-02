import * as constants from '../constants'

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
  payload: any;
  meta: {
    offline: {
      effect: any;
      commit: any;
      rollback: any;
    }
  }
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
    payload: { change: 1 },
    meta: {
      offline: {
        effect: {},
        commit: {},
        rollback: {}
      }
    }
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}