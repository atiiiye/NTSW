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
        let pageBodyWrapper = document.querySelector(".pageBodyWrapper");
        pageBodyWrapper.style.width = "80%";

        console.log("Opening...");
    }

    const onEntered = () => {
        let pageBodyWrapper = document.querySelector(".pageBodyWrapper");
        pageBodyWrapper.style.width = "80%";

        console.log("Opened...");
    }
    const onExiting = () => {
        let pageBodyWrapper = document.querySelector(".pageBodyWrapper");
        pageBodyWrapper.style.width = "100%";

        console.log("Closing...");
    }
    const onExited = () => {
        let pageBodyWrapper = document.querySelector(".pageBodyWrapper");
        pageBodyWrapper.style.width = "100%";

        console.log("Closed...");
    }

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