import {connect} from "react-redux";
import {ApiActionsCreator} from "../../../store/api-actions";
import React, {useEffect, useState} from "react";
import {Link, useParams, useLocation} from "react-router-dom";
import LoadingScreen from "../../loading-screen/loading-screen";
import PropTypes from "prop-types";
import {ActionsCreator} from "../../../store/actions";

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

  const mapStoreToProps = (store) => ({
    detailOffer: store.detailOffer,
    notFound: store.notFound,
    detailReviews: store.detailReviews,
    detailNearby: store.detailNearby
  });

  const mapDispatchToProps = (dispatch) => ({
    onLoadOffer: (id) => {
      dispatch(ApiActionsCreator.getDetailOffer(id));
    },
    resetNotFound: () => {
      dispatch(ActionsCreator.notFound(false));
    },
    resetAllData: () => {
      dispatch(ApiActionsCreator.resetAllDetailData());
    }
  });

  return connect(mapStoreToProps, mapDispatchToProps)(OfferWithData);
};


export default offerWithData;
