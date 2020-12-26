import React from "react";
//bootstrap

//components
import Layout from "../UserPanel/Layout";
import HeaderAccount from "./HeaderAccount";

//css
import "./../../css/DefaultPage.css";




const DefaultPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="window">
          <HeaderAccount />
          <div className="parent-content"></div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="alertBoxForSupport">
            <div className="well bordered-left bordered-themeprimary">
              <p>
                <strong className="fa fa-circle"></strong>
                کاربر گرامی، شما می‌توانید در صورت مواجه با هر مشکل فنی در این سامانه و یا برای ارائه پیشنهادهای خود به منظور بهبود سیستم، از طریق پیام رسان "بله" با مراجعه به آدرس NTSW_Help@ نظرات خود را ثبت نموده و حداکثر ظرف مدت 24 ساعت، پاسخ آن را دریافت نمایید
              </p>
              <p>
                <strong className="fa fa-circle"></strong>
              کاربر گرامی، شما می توانید جهت دریافت اطلاعیه های سامانه جامع تجارت ایران به کانال سامانه "بله" به آدرس Ntsw_ir@ مراجعه نمایید.
              </p>

            </div>

          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default DefaultPage;
