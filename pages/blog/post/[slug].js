import Image from "next/image";
import React from "react";

export default function Post({ blogpost }) {
  console.log(JSON.parse(blogpost))
  if (!blogpost) return <div>not found</div>;
  const {
    html,
    attributes: { thumbnail, title },
  } = JSON.parse(blogpost);

  return (
    <>
      <article className="flex justify-center flex-col lg:w-2/3 sm:w-5/6">
        <p className="text-center font-normal text-2xl m-2">{title}</p>
        <div className="flex justify-between top-0">
          <div className="flex">
            <p className="mx-3">Author</p>
            <p className="mx-3">{`created at : 02/09/2002`}</p>
          </div>
          <div>
            <p className="mx-3">1 min read</p>
          </div>
        </div>
        <Image
          width={500}
          height={500}
          src={thumbnail}
          className="rounded-md w-full m-auto"
        />

        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="my-6 "
          id="articles"
        />
      </article>
      <style jsx>{`
        article {
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
export async function getStaticPaths() {
  const fileNames = require
    .context("../../../content/blogPosts", false, /\.md$/)
    .keys()

  const path = fileNames.map((id) => {
    return { params: { slug: String(id.substring(2).slice(0,id.length-5)) } };
  });
  // console.log(path);
  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context.params.slug);
  const blogpost = await import(
    `../../../content/blogPosts/${context.params.slug}.md`
  ).catch((error) => null);
  // console.log(JSON.stringify(blogpost));
  return {
    props: {
      blogpost:JSON.stringify(blogpost),
    },
  };
}