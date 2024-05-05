import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import withStore from "../../layout/hocs/with-store";
import {AUTH_STATUS} from "../../const/const";

const Layout = (props) => {
  const {isAuth} = props;

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
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {
                    isAuth === AUTH_STATUS.NO_AUTH ? (<span className="header__login">Sign in</span>) : (
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>)
                  }
                </a>
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
  isAuth: PropTypes.string
};

export default withStore(Layout);
