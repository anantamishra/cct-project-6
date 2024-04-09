import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    text: "Google",
    link: "https://google.com",
  },
  {
    text: "Github",
    link: "https://github.com",
  },
  {
    text: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    text: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    text: "Twitter",
    link: "https://twitter.com",
  },
];

export default function Contact() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {items.map((item) => {
        return <Button link={item.link} text={item.text} />;
      })}
    </div>
  );
}

const Button = (props) => {
  return (
    <Link to={props.link}>
      <button>{props.text}</button>
    </Link>
  );
};
