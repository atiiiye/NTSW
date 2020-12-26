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
        <HeaderAccount />
      </Layout>
    </React.Fragment>
  );
};

export default DefaultPage;
