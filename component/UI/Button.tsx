import Link from "next/link";
import React from "react";

const Button = (props: {
  children: string;
  link: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className="btn btn-danger mt-3" style={{ cursor: "pointer" }}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className="btn btn-danger"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
