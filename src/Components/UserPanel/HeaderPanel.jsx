import React from "react";

//css
import styles from "./../../css/HeaderPanel.module.css";

//imgages
import LogoWhite from "./../../images/logoWhite.png";

//icons
import MenuIcon from "@material-ui/icons/Menu";

//bootstrap
import { Navbar, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const HeaderPanel = () => {
  return (
    <React.Fragment>
      <Navbar className={styles.navbar}>
        <div className={styles.navbarMenuWrapper}>
          <div className={styles.navbarMenuWrapperRight}>
            <img src={LogoWhite} alt="" />
            <Button className="navbar-toggler" type="button">
              <MenuIcon
                className="hamburger-menu"
                id="sidebar"
                //   onClick={() => this.context.toggle()}
              />
            </Button>
          </div>
          <div className="navbar-menu-wrapper-left">
            <NavLink to="#">
              <i class="fas fa-cogs" />
              مدیریت حساب کاربری
            </NavLink>
            <NavLink to="#">
              <i class="fas fa-money-check" />
              ثبت و پیگیری مشکل
            </NavLink>
            <NavLink to="#">
              <i class="fas fa-user-circle" />
              کاربر تستی
            </NavLink>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default HeaderPanel;
