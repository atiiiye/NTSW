import React, { useState } from 'react';

//contexts
import { Context } from './index'

const AdminContextes = (props) => {

    const [isOpen, setIsOpen] = useState(true)
    const [status, setStatus] = useState("Closed")

    const toggle = () => {
        console.log('toggle')
        setIsOpen(!isOpen)
    }

    const onEntering = () => {
        let window = document.querySelector(".window");
        // window.style.width = "Calc(100%-350px)";

        // console.log("Opening...");
    };

    const onEntered = () => {
        let window = document.querySelector(".window");
        // window.style.width = "Calc(100%-350px)";
        // console.log("Opened...");
    };

    const onExiting = () => {
        let window = document.querySelector(".window");
        // window.style.width = "100%";
        // window.style.transform =" translate(-100%,0)";

        // console.log("Closing...");
    };

    const onExited = () => {
        let window = document.querySelector(".window");
        // window.style.width = "100%";
        // window.style.transform = " translate(-100%,0)";

        // console.log("Closed...");
    };

    return (
        <Context.Provider
            value={{
                isOpen: isOpen,
                status: status,
                toggle: () => toggle(),
                onEntering: () => onEntering(),
                onEntered: () => onEntered(),
                onExiting: () => onExiting(),
                onExited: () => onExited(),
            }}>
            {props.children}
        </Context.Provider>
    );
}

export default AdminContextes;