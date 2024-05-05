import {connect} from "react-redux";
import {ApiActionsCreator, GET_OFFERS, LOGIN_CHECK} from "../../../store/api-actions";
import {ActionsCreator} from "../../../store/actions";


const mapStateToProps = (state) => ({
  sort: state.sort,
  currentHoverOfferId: state.hoverOfferId,
  isDataLoaded: state.isDataLoaded,
  hotels: state.offers,
  currentTown: state.currentTown
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(ApiActionsCreator[GET_OFFERS]());
    dispatch(ApiActionsCreator[LOGIN_CHECK]());
  },
  async setCurrentTown(town) {
    await dispatch(ActionsCreator.townChange(town));
  }
});


export default connect(mapStateToProps, mapDispatchToProps);

