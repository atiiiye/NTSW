import React from "react";

export const Context = React.createContext({
    
    // Admin Panel contextes
    isOpen: "",
    status: "",
    toggle: () => {},
    onEntering: () => {},
    onEntered: () => {},
    onExiting: () => {},
    onExited: () => {},
})