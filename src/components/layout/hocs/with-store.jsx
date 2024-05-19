import {connect} from "react-redux";
import {getAuthorizationStatus, getUserData} from "../../../store/user/selectors";

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  isAuth: getAuthorizationStatus(state)
});

export default connect(mapStateToProps);
