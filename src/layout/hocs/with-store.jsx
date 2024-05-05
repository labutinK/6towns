import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.authorizationStatus,
});


export default connect(mapStateToProps, null);
