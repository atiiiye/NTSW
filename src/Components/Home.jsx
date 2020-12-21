import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return ( 
        <React.Fragment>
            <h1>Home Page</h1>
            <NavLink to="/select-role">Select Role</NavLink>
        </React.Fragment>
     );
}
 
export default Home;