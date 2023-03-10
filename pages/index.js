import React, { Component } from "react";
import "../styles/Home.module.css";
import content from "../content/home.md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aboutme from "../components/aboutme";
import Products from "../components/Products";
import TypeIt from "typeit-react";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const { attributes, html } = content;

  const slickSetting = {
    autoplay: true,
    dots: true,
    speed: 500,
  };
  return (
    <div className="p-0 ">
      <div className="flex w-[100vw] m-auto justify-center align-middle flex-wrap">
        {/* one */}
        <Slider {...slickSetting} className="z-10 w-[40rem] m-auto h-fit mb-4 flex-wrap"> {/*this will change slider setting also change clasname of image of slider*/}
          <div>
            <Image
              height={300}
              width={600}
              src="https://plus.unsplash.com/premium_photo-1666184891921-2be4f78ce4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              className="rounded-md m-auto mx-auto"
            />
          </div>
          <div>
            <Image
              height={300}
              width={600}
              src="https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvYmxlbSUyMHNvbHZpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              className="rounded-md m-auto mx-auto"
            />
          </div>
          <div>
            <Image
              height={300}
              width={600}
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              // className="rounded-md m-auto sm:w-96 h-80 lg:w-[70vw]"
              className="rounded-md m-auto mx-auto"
            />
          </div>
        </Slider>
        {/* two */}
        <Box
          elevation={1}
          className=" justify-center flex-col bg-white z-50 w-[20rem] mx-auto my-4 p-4"
        >
          <svg viewbox="0 0 100 20">
            <defs>
              <linearGradient id="gradient">
                <stop color="#000" />
              </linearGradient>
              <pattern
                id="wave"
                x="0"
                y="-0.5"
                width="100px"
                height="100px"
                patternUnits="userSpaceOnUse"
              >
                <path
                  id="wavePath"
                  d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                  mask="url(#mask)"
                  fill="url(#gradient)"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="30,0"
                    repeatCount="indefinite"
                  />
                </path>
              </pattern>
            </defs>
            <text
              text-anchor="middle"
              x="50"
              y="15"
              font-size="10"
              fill="white"
              fill-opacity="0.1"
            >
              WELCOME TO SOLITY
            </text>
            <text
              color="red"
              text-anchor="middle"
              x="50"
              y="15"
              font-size="10"
              fill="url(#wave)"
              fill-opacity="1"
            >
              WELCOME TO SOLITY
            </text>
          </svg>

          <TypeIt
            className="p-0 text-blue-600 text-sm"
            options={{
              strings: [
                "We help people learn new and smart things easily, By providing clear, practical advice and examples to become more effective problem solvers.",
              ],
              speed: 100,
              waitUntilVisible: true,
            }}
          />
          <div />
        </Box>
      </div>
      <Aboutme />
      <Products />
    </div>
  );
}
