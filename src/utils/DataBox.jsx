import React from 'react';

import { NavLink } from "react-router-dom";

//packages
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const DataBaox = ({ dataBoxNumber, dataBoxText, icon, bgStyle }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3">
      <div className="databox databox-shadowed">
        <NavLink
          to="#"
          className="managInvoice"
          style={{ backgroundColor: ` ${bgStyle}` }}
        >
          {icon}
        </NavLink>
        <div className="databox-left">
          <span id="spnSumProforma" className="databox-number">
            {dataBoxNumber}
          </span>
          <span className="databox-text">{dataBoxText}</span>

          <div className="databox-state">
            <HighlightOffIcon style={{ fill: `${bgStyle}`, transform:'rotate(135deg)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default DataBaox;