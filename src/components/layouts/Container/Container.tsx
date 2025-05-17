import React from "react";

import "./Container.scss";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = (props: IContainerProps) => {
  const { children } = props;

  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;