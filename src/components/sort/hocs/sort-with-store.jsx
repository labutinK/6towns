import {connect} from "react-redux";
import {getSort} from "../../../store/process/selectors";
import {sortChange} from "../../../store/actions";

const mapStateToProps = (state) => ({
  sort: getSort(state)
});

const mapDispatchToProps = (dispatch) => ({
  setSorter: (sort) => {
    dispatch(sortChange(sort));
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
