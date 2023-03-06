import React, { useEffect } from "react";
import importBlogPostsWithContent from "../../logicFunctions/getPostWithContent";
import Blogpostcard from "../../components/Blogpostcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPostSliderCard from "../../components/BlogPostSliderCard";
import PaginationModal from "../../components/Pagination";

export default function Blog(props) {
  const { sorted, noOfPageForPagination ,UserBlogPage} = props;

  // console.log(sorted)
  const slickSetting = {
    dots: true,
    autoplay: true,
    speed: 1700,
  };
  
  return (
    <React.Fragment>

      <Slider {...slickSetting} className="m-auto w-2/3">
        {sorted.slice(0, 3).map((post) => {
          return <BlogPostSliderCard post={post} key={post.attributes.date}/>;
        })}
      </Slider>

      <div className="flex flex-row flex-wrap justify-center ">
        {sorted.slice(3).map((post) => {
          return <Blogpostcard post={post} key={post.attributes.date}/>;
        })}
      </div>

      {sorted.length === 0 && <div className=""><h1 className="m-6 text-center font-medium">Post Unavailable</h1></div>}

      <PaginationModal noOfPageForPagination={noOfPageForPagination} currentPage={UserBlogPage}/>

    </React.Fragment>
  );
}

Blog.getInitialProps = async (context) => {
  const postsList = await importBlogPostsWithContent();

 const UserBlogPage = context.query.page;

  const sorted = postsList.sort(
    (a, b) =>
      a.attributes.date.slice(0, 10).replaceAll("-", "") -
      b.attributes.date.slice(0, 10).replaceAll("-", "")
  );

  const noOfPageForPagination = Math.floor(sorted.length / 9 + 1);
  const start = (UserBlogPage - 1) * 9;
  const end = UserBlogPage * 9;

 const pagination = sorted.slice(start, end);

  return { postsList, sorted: pagination, noOfPageForPagination ,UserBlogPage};
};
