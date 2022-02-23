import React from "react";

const Error = (props: { children: string }) => {
  return (
    <div>
      <div className="alert">{props.children}</div>
    </div>
  );
};

export default Error;
