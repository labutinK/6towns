import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import withStore from "./hocs/with-store";
import {AUTH_STATUS} from "../../const/const";

const Layout = (props) => {
  const {isAuth, userData} = props;

  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={`/login`} className='header__nav-link header__nav-link--profile'>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {
                    isAuth === AUTH_STATUS.NO_AUTH ? (<span className="header__login">Sign in</span>) : (
                      <span className="header__user-name user__name">{userData.email}</span>)
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main>
      {props.children}
    </main>
  </div>;
};

Layout.propTypes = {
  children: PropTypes.node,
  userData: PropTypes.object,
  isAuth: PropTypes.string
};

export default withStore(Layout);
