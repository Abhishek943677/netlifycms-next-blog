import Link from "next/link";
import React from "react";

export default function BlogPostSliderCard({ post }) {

  return (
    <div>
      <Link href={`blog/post/${post.slug}`} key={post.attributes.title}>
        <h2 className=" w-fit text-center">{post.attributes.title}</h2>
        <p>{post.attributes.date.slice(0,10)}</p>
        <img src={post.attributes.thumbnail} alt="An image" className="" />
      </Link>
    </div>
  );
}
