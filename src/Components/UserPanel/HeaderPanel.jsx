import React, { useState } from "react";

//css
import "./../../css/HeaderPanel.css";

//imgages
import LogoWhite from "./../../images/logoWhite.png";

//icons
import MenuIcon from "@material-ui/icons/Menu";

//bootstrap
import { Navbar, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import TooltipComponent from "../../utils/TooltipComponent";


//context
import { Context } from "./../../Contextes";

const HeaderPanel = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Navbar>
          {console.log(context)}
          <div className="navbar-menu-wrapper flex-column flex-md-row">
            <div className="navbar-menu-wrapper-right d-none d-md-flex">
              <div className="navbar-menu-box-right">
                <img src={LogoWhite} alt="" />
                <Button className="navbar-toggler" type="button">
                  <MenuIcon
                    className="hamburger-menu"
                    id="sidebar"
                    onClick={context.toggle}
                  />
                </Button>
              </div>
            </div>
            <div className="navbar-menu-wrapper-left d-none d-md-flex">
              <div className="navbar-menu-box-left">
                <div>
                  <NavLink to="#">
                    <p>مدیریت حساب کاربری</p>
                  </NavLink>
                  <NavLink to="#">
                    <p>ثبت و پیگیری مشکل</p>
                  </NavLink>
                  <NavLink to="#">
                    <p>کاربر تستی</p>
                  </NavLink>
                  <NavLink to="#" id="messages">
                    <i className="material-icons">&#xe0be;</i>
                  </NavLink>
                  <NavLink to="#" id="exit">
                    <i class="material-icons">exit_to_app</i>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="navbar-menu-wrapper-right d-flex d-md-none  ">
              <div className="navbar-menu-box-right">
                <img src={LogoWhite} alt="" />
              </div>
            </div>
            <div className="navbar-menu-wrapper-left d-flex d-md-none">
              <div className="navbar-menu-box-left">
                <div>
                  <Button className="navbar-toggler" type="button">
                    <MenuIcon
                      className="hamburger-menu"
                      id="sidebar"
                      onClick={context.toggle}
                    />
                  </Button>
                  <NavLink to="#">
                    <i className="fas fa-cog" />
                  </NavLink>
                  <NavLink to="#">
                    <i class="fas fa-money-check" />
                  </NavLink>
                  <NavLink to="#">
                    <i className="fas fa-user-circle" />
                  </NavLink>
                  <NavLink to="#" id="messages">
                    <i className="material-icons">&#xe0be;</i>
                  </NavLink>
                  <NavLink to="#" id="exit">
                    <i class="material-icons">exit_to_app</i>
                  </NavLink>
                </div>
              </div>
            </div>
            <TooltipComponent
              placement={"bottom"}
              target={"exit"}
              child={"خروج"}
            />
            <TooltipComponent
              placement={"bottom"}
              target={"messages"}
              child={"پیام ها"}
            />
          </div>
        </Navbar>
      )}
    </Context.Consumer>
  );
};

export default HeaderPanel;
