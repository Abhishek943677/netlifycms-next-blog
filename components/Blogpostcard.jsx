import { Card, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogpostcard({ post }) {
  return (
    <Paper
      elevation={4}
      // variant='outlined'
      className="lg:w-1/3 md:w-1/2 sm:w-1/2 m-2 p-1 justify-between flex flex-col"
      // data-aos="zoom-in-up"
      // data-aos-duration="500"
    >
      <Link href={`blog/post/${post.slug}`} key={post.attributes.title}>
        <div className="group flex text-center relative overflow-hidden rounded-md cursor-pointer">
          <Image
            width={500}
            height={500}
            src={post.attributes.thumbnail}
            alt="An image"
            className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-4 group-hover:scale-125 w-full"
          />
          <div className="absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
        </div>
        <p className=" w-fit mx-1">
          {post.attributes.title.slice(0, 100)} ......
        </p>
      </Link>
      <div className="flex justify-between m-1">
        <p className="text-sm">{post.attributes.date.slice(0, 10)}</p>
        <button
          className="mx-3 text-base"
          onClick={async () => {
            const shareData = {
              title: "Blog.solity.fun",
              text: `${post.attributes.title}`,
              url: `https://blog.solity.fun/blog/post/${post.slug}`,
            };
            try {
              await navigator.share(shareData);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          share
        </button>
      </div>
    </Paper>
  );
}
