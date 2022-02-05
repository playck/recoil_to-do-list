import React from "react";
import { createPortal } from "react-dom";

interface Props {
  selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = selector && document.querySelector(selector);

  return (
    <div>{rootElement ? createPortal(children, rootElement) : children}</div>
  );
};

export default Portal;
