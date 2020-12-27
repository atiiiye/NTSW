import React from "react";
//bootstrap

//components
import Layout from "../UserPanel/Layout";
import HeaderAccount from "./HeaderAccount";

//css
import "./../../css/DefaultPage.css";
import { NavLink } from "react-router-dom";

//packages
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const DefaultPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="window">
          <HeaderAccount />
          <div className="parent-content">
            <div className="row">
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                id="boxForBazargan"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="databox databox-shadowed">
                      <NavLink to="#" className="managInvoice">
                        <i className="fa fa-clipboard" />
                      </NavLink>
                      <div className="databox-left">
                        <span id="spnSumProforma" className="databox-number">
                          3801
                        </span>
                        <span className="databox-text">پرونده های ثبت شده</span>
                        <div className="databox-state">
                          <HighlightOffIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                id="alertBoxForSupport"
              >
                <div className="well bordered-left bordered-themeprimary">
                  <p>
                    <strong className="fa fa-circle"></strong>
                    کاربر گرامی، شما می‌توانید در صورت مواجه با هر مشکل فنی در
                    این سامانه و یا برای ارائه پیشنهادهای خود به منظور بهبود
                    سیستم، از طریق پیام رسان "بله" با مراجعه به آدرس NTSW_Help@
                    نظرات خود را ثبت نموده و حداکثر ظرف مدت 24 ساعت، پاسخ آن را
                    دریافت نمایید
                  </p>
                  <p>
                    <strong className="fa fa-circle"></strong>
                    کاربر گرامی، شما می توانید جهت دریافت اطلاعیه های سامانه
                    جامع تجارت ایران به کانال سامانه "بله" به آدرس Ntsw_ir@
                    مراجعه نمایید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default DefaultPage;
