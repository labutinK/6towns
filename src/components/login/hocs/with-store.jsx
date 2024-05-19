import {connect} from "react-redux";
import {ApiActionsCreator} from "../../../store/api-actions";

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => ({
  login(formData, navigate) {
    dispatch(ApiActionsCreator.login(formData, navigate));
  }
});

export default connect(null, mapDispatchToProps);
