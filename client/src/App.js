import React, { useState, useEffect, Suspense } from 'react'

import './App.scss';
import "../src/styles/styles.scss";
import 'antd/dist/antd.min.css';
import "aos/dist/aos.css";
import { Route, Switch, Redirect, useNavigate } from "react-router-dom";
import $ from 'jquery';
import { ConnectedRouter as Router } from 'connected-react-router';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import PrivateRouter from './containers/customRouter/PrivateRouter';
import Header from './containers/Header/Header';
import Routes from './routes/Routes';
import Home from './containers/Home/Home';
import { TYPE_USER } from './utils';
import Footer from './containers/Footer/Footer';
import { PATH_NAME } from './utils/constants';
import { history } from './redux/store'
import Contact from './containers/Contact/Contact';
import ToolPhoneZaloChat from './containers/Common/ToolPhoneZaloChat/ToolPhoneZaloChat';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import About from './containers/About/About';
import Guarantee from './containers/Guarantee/Guarantee';
import Security from './containers/Security/Security';
import Payment from './containers/Payment/Payment';
import Transport from './containers/Transport/Transport';
import Login from './containers/Login/Login';
import routes from './config/routes';
import { DefaultLayout } from './components/layouts';
import Page404 from './containers/Page404/Page404';
import Admin from './containers/Admin/Admin';
import NotFound from './containers/Page404/NotFound';
import { initializeApp } from './redux/actions';

if (typeof window !== "undefined") {
  injectStyle();
}
let pathName = window.location.pathname
function App() {
  const state = useSelector((state) => state);
  const { auth, app, user, router } = state
  const { userInfo, isLoggedIn } = user
  const { location } = router
  const dispatch = useDispatch()

  const scrollTopAnimated = () => {
    $('#scrollToTop').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 1200);
    })
  }

  useEffect(() => {
    dispatch(initializeApp())
    scrollTopAnimated()
  }, []);
  console.log("bh_app", state)
  return (

    <div className="App">
      <Router history={history}>
        <ScrollToTop />
        <Suspense fallback={<div>Loading....</div>}>
          {!isLoggedIn &&
            <div className='container-content'>
              < Header />
              <Switch>
                <div className="main">
                  < div id="container-page-content" className="container-page-content ">
                    <Route exact path={PATH_NAME.HOME} component={Home} />

                    <Route exact path={PATH_NAME.LOGIN} component={Login} />

                    <Route exact path={PATH_NAME.CONTACT} component={Contact} />
                    <Route exact path={PATH_NAME.ABOUT_OUR} component={About} />
                    <Route exact path={PATH_NAME.GUARANTEE} component={Guarantee} />
                    <Route exact path={PATH_NAME.SECURITY} component={Security} />
                    <Route exact path={PATH_NAME.PAYMENT} component={Payment} />
                    <Route exact path={PATH_NAME.TRANSPORT} component={Transport} />

                    <Route exact path={PATH_NAME.PAGE_404} component={Page404} />
                  </div>
                  <ToolPhoneZaloChat />
                  <div id="scrollToTop" className='item-center'>
                    <i class="fa fa-angle-double-up" aria-hidden="true">
                    </i>
                  </div>
                </div>
              </Switch>
              <Footer />
            </div>
          }
          {isLoggedIn &&
            <div className='container-content container-content-logined'>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      render={(props) =>
                        <DefaultLayout>
                          <route.component {...props} />
                        </DefaultLayout>
                      }
                    />
                  ) : null;
                })}
                <Route exact path={PATH_NAME.NOT_FOUND} component={NotFound} />
                <Route path='*' component={NotFound} />
              </Switch>
            </div>}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Suspense>
      </Router>
    </div >
  );
}

export default App;
