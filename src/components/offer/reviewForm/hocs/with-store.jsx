import {connect} from "react-redux";
import {ApiActionsCreator} from "../../../../store/api-actions";
import {requestError, commentError} from "../../../../store/actions";
const mapStoreToProps = (store) => ({
  commentError: store.commentError,
  requestError: store.requestError
});

const mapDispatchToProps = (dispatch) => ({
  postComment: (fd, id) => {
    dispatch(ApiActionsCreator.postComment(fd, id));
  },
  resetError: () => {
    dispatch(requestError(false));
    dispatch(commentError(``));
  }
});

export default connect(mapStoreToProps, mapDispatchToProps);
