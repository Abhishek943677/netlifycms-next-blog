import Link from 'next/link'
import React from 'react'

export default function Blogpostcard({post}) {
  return (
        <div
          className="flex-auto justify-center border-r-2 sm:w-60 lg:w-80 md:w-72 xl:w-96 m-2 border-red-900 p-1"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <Link href={`blog/post/${post.slug}`} key={post.attributes.title}>
            <h2 className=" w-fit border-r-2">{post.attributes.title}</h2>
            <p>{post.attributes.date.slice(0,10)}</p>
            {/* image effect */}
            <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
              <img
                src={post.attributes.thumbnail}
                alt="An image"
                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-4 group-hover:scale-125 cursor-pointer"
              />
              <div className="absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
          </Link>
        </div>  )
}
