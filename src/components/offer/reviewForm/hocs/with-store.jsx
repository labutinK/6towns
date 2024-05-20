import {connect} from "react-redux";
import {requestError, commentError} from "../../../../store/actions";
import {postComment} from "../../../../store/api-actions";
const mapStoreToProps = (store) => ({
  commentError: store.commentError,
  requestError: store.requestError
});

const mapDispatchToProps = (dispatch) => ({
  postComment: (fd, id) => {
    dispatch(postComment(fd, id));
  },
  resetError: () => {
    dispatch(requestError(false));
    dispatch(commentError(``));
  }
});

export default connect(mapStoreToProps, mapDispatchToProps);
