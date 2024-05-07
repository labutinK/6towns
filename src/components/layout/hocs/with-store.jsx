import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  userData: state.userData,
  isAuth: state.authorizationStatus
});

export default connect(mapStateToProps);
