import {ActionsCreator} from "../../../store/actions";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  sort: state.sort
});

const mapDispatchToProps = (dispatch) => ({
  setSorter: (sort) => {
    dispatch(ActionsCreator.sortChange(sort));
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
