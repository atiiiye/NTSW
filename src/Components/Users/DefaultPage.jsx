import React from "react";
//bootstrap

//components
import Layout from "../UserPanel/Layout";
import HeaderAccount from "./HeaderAccount";
import DataBox from "./../../utils/DataBox";

//css
import "./../../css/DefaultPage.css";


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
                  <DataBox
                    dataBoxNumber={3801}
                    dataBoxText={"پرونده های ثبت شده"}
                    icon={<i className="fa fa-clipboard" />}
                    bgStyle={"#fa7d09"}
                  />
                  <DataBox
                    dataBoxNumber={214}
                    dataBoxText={"پرونده های تایید شده"}
                    icon={<i className="fas fa-file" />}
                    bgStyle={"#c70d3a"}
                  />
                  <DataBox
                    dataBoxNumber={7}
                    dataBoxText={
                      "گشایش های اعتبار اسنادی/ حواله/ برات تایید شده"
                    }
                    icon={<i className="fa fa-list-alt" />}
                    bgStyle={"#03506f"}
                  />
                  <DataBox
                    dataBoxNumber={16}
                    dataBoxText={" منشا ارزهای غیر بانکی ثبت شده"}
                    icon={<i className="fa fa-credit-card" />}
                    bgStyle={"#ffce55"}
                  />
                  <DataBox
                    dataBoxNumber={120}
                    dataBoxText={"نمایندگان فعال"}
                    icon={<i className="fa fa-users" />}
                    bgStyle={"#e75b8d"}
                  />

                  <DataBox
                    dataBoxNumber={1}
                    dataBoxText={"منشا ارزهای بانکی ثبت شده"}
                    icon={<i className="fa fa-money" />}
                    bgStyle={"#007944"}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                id="alertBoxForSupport"
              >
                <div className="well">
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
