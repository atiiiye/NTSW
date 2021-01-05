import React, { useState } from 'react'
import { Tooltip } from "reactstrap";

const TooltipComponent = ({ placement, target, child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Tooltip
      placement={placement}
      target={target}
      isOpen={isOpen}
      toggle={toggle}
      style={{ fontFamily: "Vazir" }}
    >
      {child}
    </Tooltip>
  );
};
 
export default TooltipComponent;