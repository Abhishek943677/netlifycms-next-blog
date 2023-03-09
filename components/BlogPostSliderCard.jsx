import Link from "next/link";
import React from "react";

export default function BlogPostSliderCard({ post }) {

  return (
    <div className="flex justify-center">
      <Link href={`blog/post/${post.slug}`} key={post.attributes.title}>
        <h2 className=" w-fit">{post.attributes.title.slice(0,50)}.....</h2>
        <p>{post.attributes.date.slice(0,10)}</p>
        <img src={post.attributes.thumbnail} alt="An image" className="m-auto rounded-md" />
      </Link>
    </div>
  );
}
