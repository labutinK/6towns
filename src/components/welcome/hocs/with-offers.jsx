import {connect} from "react-redux";
import {ApiActionsCreator} from "../../../store/api-actions";
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
    dispatch(ApiActionsCreator.getOffers());
    dispatch(ApiActionsCreator.loginCheck());
  },
  setCurrentTown(town) {
    dispatch(ActionsCreator.townChange(town));
  },
  resetDataLoadedFlag() {
    dispatch(ActionsCreator.dataIsLoaded(false));
  }

});


export default connect(mapStateToProps, mapDispatchToProps);

