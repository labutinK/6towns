import {connect} from "react-redux";
import {townChange} from "../../../store/actions";
import {getCurrentTown} from "../../../store/process/selectors";

const mapStateToProps = (state) => ({
  currentTown: getCurrentTown(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity(cityName) {
    dispatch(townChange(cityName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
