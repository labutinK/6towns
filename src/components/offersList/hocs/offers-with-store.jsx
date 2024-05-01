import {connect} from "react-redux";
import {ActionsCreator} from "../../../store/actions";

const mapStateToProps = (state) => ({
  hoverOfferId: state.hoverOfferId
});

const mapDispatchToProprs = (dispatch) => ({
  setNewHoverOffer: (id) => {
    dispatch(ActionsCreator.hoverOfferId(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProprs);

