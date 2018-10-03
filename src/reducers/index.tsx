import { EnthusiasmAction, ItemAction } from "../actions";
import { StoreState } from "../types/index";
import {
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  ADD_ITEM
} from "../constants/index";

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction | ItemAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
    case ADD_ITEM:
      const newState: StoreState = {
        ...state,
        items: []
      };
      state.items.forEach(i => newState.items.push(i));
      newState.items.push(action.payload);
      return newState;
  }
  return state;
}
