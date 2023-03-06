import React, { Component } from "react";
import Link from "next/link";
import content from "../content/home.md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <Slider {...slickSetting} className="w-1/2 m-auto">
        <div>
          <img src="img/1200px-whio_blue_duck_at_staglands_akatarawa_new_zealand.jpg"></img>
        </div>
        <div>
          <img src="http://imaginaryworld.i.m.pic.centerblog.net/o/815725b5.jpg"></img>
        </div>
        <div>
          <img src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"></img>
        </div>
      </Slider>
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
