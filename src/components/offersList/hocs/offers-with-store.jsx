import {connect} from "react-redux";
import {hoverOfferId} from "../../../store/actions";
import {getHoverOfferId} from "../../../store/process/selectors";

const mapStateToProps = (state) => ({
  hoverOfferId: getHoverOfferId(state)
});

const mapDispatchToProprs = (dispatch) => ({
  setNewHoverOffer: (id) => {
    dispatch(hoverOfferId(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProprs);

