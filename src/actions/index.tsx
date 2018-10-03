import * as constants from "../constants";
import { Item } from "../types";
import uuid from "uuid";

export interface OfflineAction {
  payload: any;
  meta: {
    offline: {
      effect: any;
      commit: any;
      rollback: any;
    };
  };
}

export interface AddItem extends OfflineAction {
  type: constants.ADD_ITEM;
  payload: Item;
}

export interface RemoveItem extends OfflineAction {
  type: constants.REMOVE_ITEM;
  payload: Item;
}

export type ItemAction = AddItem | RemoveItem;

export function addItem(): AddItem {
  return {
    type: constants.ADD_ITEM,
    payload: {
      id: uuid.v4()
    },
    meta: {
      offline: {
        effect: {},
        commit: {},
        rollback: {}
      }
    }
  };
}

export function removeItem(): RemoveItem {
  return {
    type: constants.REMOVE_ITEM,
    payload: {
      id: uuid.v4()
    },
    meta: {
      offline: {
        effect: {},
        commit: {},
        rollback: {}
      }
    }
  };
}

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}
