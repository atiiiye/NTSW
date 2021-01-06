import React from "react";

//bootstrap
import { Navbar, BreadcrumbItem, Breadcrumb } from "reactstrap";
import SelectBox from "../SelectRole/SelectBox";

//css
import "./../../css/HeaderAccount.css";

//contextes
import { Context } from "./../../Contextes";

//components
import Timer from "./../../utils/Timer" 

const HeaderAccount = () => {
  const handleOnchange = (event) => {
    event.preventDefault();
  };

  return (
    <Context.Consumer>
      {(context) => (
        <div className="parent">
          <Navbar className="user-header">
            <div className="user-header-left col-12 col-md-6">
              <Breadcrumb className="breadcrumb">
                <BreadcrumbItem tag="a" href="/">
                  خانه
                </BreadcrumbItem>
                <BreadcrumbItem tag="a" href="/select-role">
                  انتخاب نقش
                </BreadcrumbItem>
                <BreadcrumbItem active tag="a" href="#">
                  صفحه اول
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="user-header-right col-12 col-md-6">
              <SelectBox />
            </div>
          </Navbar>
          <div className="page-header">
            <div className="header-buttons">
              <Timer />
              <div className="fullscreen" onClick={context.toggle}>
                <i className="material-icons">&#xe5d0;</i>
              </div>
            </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
};

export default HeaderAccount;
