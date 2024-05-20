import {connect} from "react-redux";
import {goLogin} from "../../../store/api-actions";

const mapDispatchToProps = (dispatch) => ({
  login(formData, navigate) {
    dispatch(goLogin(formData, navigate));
  }
});

export default connect(null, mapDispatchToProps);
