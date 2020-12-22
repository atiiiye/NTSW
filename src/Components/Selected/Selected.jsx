import React, { useState } from "react";


import { NavLink } from "react-router-dom";


const Selected = () => {
    return ( 
        <React.Fragment>
            <h3>Selected Page</h3>
            <NavLink to="/layout">Layout</NavLink>
        </React.Fragment>
     );
}
 
export default Selected;