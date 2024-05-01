import {connect} from "react-redux";
import {ActionsCreator} from "../../../store/actions";

const mapStateToProps = (state) => ({
  currentTown: state.currentTown,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(cityName) {
    dispatch(ActionsCreator.townChange(cityName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
