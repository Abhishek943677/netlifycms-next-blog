import React from "react";
import content from "../content/home.md";

export default function Home() {
  const { attributes, html } = content;

  const slickSetting = {
    dots: true,
    autoplay: true,
    speed: 500,
  };
  
  return (
    <React.Fragment>
      <h1>{attributes.title}</h1>
      <h3 className="text-3xl font-bold underline m-auto p-4">Hello world!</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        h1,
        div {
          text-align: center;
        }
      `}</style>
    </React.Fragment>
  );
}
