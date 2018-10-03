import Hello from "../components/Hello";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export function mapStateToProps({
  enthusiasmLevel,
  languageName,
  items
}: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
    items
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction | actions.ItemAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onAddItem: () => dispatch(actions.addItem()),
    onRemoveItem: () => dispatch(actions.removeItem())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
