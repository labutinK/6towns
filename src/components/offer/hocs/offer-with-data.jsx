import {connect} from "react-redux";
import {ApiActionsCreator} from "../../../store/api-actions";
import React, {useEffect, useState} from "react";
import {Link, useParams, useLocation} from "react-router-dom";
import LoadingScreen from "../../loading-screen/loading-screen";
import PropTypes from "prop-types";
import {getDetailNearby, getDetailOffer, getDetailReviews} from "../../../store/offers-data/selectors";
import {getNotFound} from "../../../store/process/selectors";
import {notFound as nnFound} from "../../../store/actions";

const offerWithData = (WrappedComponent) => {
  const OfferWithData = (props) => {
    const {id} = useParams();
    const {onLoadOffer, detailOffer, notFound, resetNotFound, detailReviews, detailNearby, resetAllData} = props;
    const [offerLoaded, setLoadedStatus] = useState(false);
    const location = useLocation();

    useEffect(() => {
      if (!offerLoaded) {
        onLoadOffer(id);
      }
    }, [offerLoaded]);

    useEffect(() => {
      if (Object.keys(detailOffer).length !== 0) {
        setLoadedStatus(true);
      }
    }, [detailOffer]);

    useEffect(() => {
      return () => {
        resetAllData();
        setLoadedStatus(false);
        if (notFound) {
          resetNotFound();
        }
      };
    }, [location]);


    if (notFound) {
      return <section className="error">
        <div className="container">
          <h1>404. <br/><small>Offer not found</small></h1>
          <Link to="/">Go to main page</Link>
        </div>
      </section>;
    }
    if (!offerLoaded) {
      return <LoadingScreen></LoadingScreen>;
    }

    return <WrappedComponent card={detailOffer} reviews={detailReviews} others={detailNearby}></WrappedComponent>;
  };

  OfferWithData.propTypes = {
    onLoadOffer: PropTypes.func,
    detailOffer: PropTypes.object,
    notFound: PropTypes.bool,
    resetNotFound: PropTypes.func,
    resetAllData: PropTypes.func,
    detailReviews: PropTypes.array,
    detailNearby: PropTypes.array
  };

  const mapStoreToProps = (state) => ({
    detailOffer: getDetailOffer(state),
    notFound: getNotFound(state),
    detailReviews: getDetailReviews(state),
    detailNearby: getDetailNearby(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onLoadOffer: (id) => {
      dispatch(ApiActionsCreator.getDetailOffer(id));
    },
    resetNotFound: () => {
      dispatch(nnFound(false));
    },
    resetAllData: () => {
      dispatch(ApiActionsCreator.resetAllDetailData());
    }
  });

  return connect(mapStoreToProps, mapDispatchToProps)(OfferWithData);
};


export default offerWithData;
