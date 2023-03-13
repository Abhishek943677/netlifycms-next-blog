import React from "react";
import importBlogPostsWithContent from "../../logicFunctions/getPostWithContent";
import Blogpostcard from "../../components/Blogpostcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPostSliderCard from "../../components/BlogPostSliderCard";
import PaginationModal from "../../components/Pagination";

export default function Blog(props) {
  const { sorted, noOfPageForPagination, UserBlogPage } = props;

  const slickSetting = {
    dots: true,
    autoplay: true,
    speed: 1700,
  };

  return (
    <div>
      <div className=" mx-auto lg:w-2/4 sm:w-2/3 px-8">
      <Slider {...slickSetting} className="mx-auto w-full">
        {sorted.slice(0, 3).map((post) => {
          return <BlogPostSliderCard post={post} key={post.attributes.date} />;
        })}
      </Slider>
      </div>

      <div className="flex flex-row flex-wrap justify-center mx-auto my-6">
        {sorted.slice(3).map((post) => {
          return <Blogpostcard post={post} key={post.attributes.date} />;
        })}
      </div>

      {sorted.length === 0 && (
        <div className="">
          <h1 className="m-6 text-center font-medium">{`Post unavailable at page ${UserBlogPage}`}</h1>
        </div>
      )}

      <PaginationModal
        noOfPageForPagination={noOfPageForPagination}
        currentPage={UserBlogPage}
      />
    </div>
  );
}


export async function getStaticPaths() {
  const postsList = await importBlogPostsWithContent();
  var path =[];

for (let i = 1 ; i <  Math.floor(postsList.length / 9 + 2); i++) {
path =[...path,{params:{page:String(i)}}]  
};
// console.log(path);
  return {
    paths: path,
  fallback: false,
  }
}




export async function getStaticProps(context) {
  console.log(context)
  const UserBlogPage = context.params.page;
  var pagination;
  var noOfPageForPagination;
  try {
    const postsList = await importBlogPostsWithContent();

    // console.log(UserBlogPage);
    const sorted = postsList.sort(
      (a, b) =>
        b.attributes.date.slice(0, 10).replaceAll("-", "") -
        a.attributes.date.slice(0, 10).replaceAll("-", "")
    );

     noOfPageForPagination = Math.floor(sorted.length / 9 + 1);
    const start = (UserBlogPage - 1) * 9;
    const end = UserBlogPage * 9;

     pagination = sorted.slice(start, end);
    // console.log(pagination);
  } catch (error) {
    pagination=[];
    noOfPageForPagination=5
  }

  return {
    props: {
      sorted: pagination,
      noOfPageForPagination,
      UserBlogPage,
    },
  };
}
