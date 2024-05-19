import {connect} from "react-redux";
import {townChange, dataIsLoaded} from "../../../store/actions";
import {ApiActionsCreator} from "../../../store/api-actions";
import {getCurrentTown, getHoverOfferId, getIsDataLoaded, getSort} from "../../../store/process/selectors";
import {getOffers} from "../../../store/offers-data/selectors";


const mapStateToProps = (state) => ({
  sort: getSort(state),
  currentHoverOfferId: getHoverOfferId(state),
  isDataLoaded: getIsDataLoaded(state),
  hotels: getOffers(state),
  currentTown: getCurrentTown(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(ApiActionsCreator.loginCheck());
    return dispatch(ApiActionsCreator.getOffers());
  },
  setCurrentTown(town) {
    dispatch(townChange(town));
  },
  resetDataLoadedFlag() {
    dispatch(dataIsLoaded(false));
  }

});


export default connect(mapStateToProps, mapDispatchToProps);

