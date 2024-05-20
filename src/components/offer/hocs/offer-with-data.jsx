import {useSelector, useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {Link, useParams, useLocation} from "react-router-dom";
import LoadingScreen from "../../loading-screen/loading-screen";
import {notFound as nnFound} from "../../../store/actions";
import {getDetailOfferData, resetAllDetailData} from "../../../store/api-actions";
import {NameSpace} from "../../../store/root-reducer";

const offerWithData = (WrappedComponent) => {
  const OfferWithData = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const detailOffer = useSelector((state) => state[NameSpace.data].detailOffer);
    const detailReviews = useSelector((state) => state[NameSpace.data].detailReviews);
    const detailNearby = useSelector((state) => state[NameSpace.data].detailNearby);
    const notFound = useSelector((state) => state[NameSpace.data].notFound);
    const [offerLoaded, setLoadedStatus] = useState(false);
    const location = useLocation();

    useEffect(() => {
      if (!offerLoaded) {
        dispatch(getDetailOfferData(id));
      }
    }, [offerLoaded]);

    useEffect(() => {
      if (Object.keys(detailOffer).length !== 0) {
        setLoadedStatus(true);
      }
    }, [detailOffer]);

    useEffect(() => {
      return () => {
        dispatch(resetAllDetailData());
        setLoadedStatus(false);
        if (notFound) {
          dispatch(nnFound(false));
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

  return OfferWithData;
};


export default offerWithData;
