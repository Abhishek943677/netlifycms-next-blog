import React, { useEffect, useState } from "react";
import Link from "next/link";
import importBlogPostsWithContent from "../../logicFunctions/getPostWithContent";

const Layout = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResultModal, setShowSearchResultModal] = useState(false);
  const [serachParamFromTitle, setSearchParamFromTitle] = useState([]);
  const [serachParamFromHtml, setSearchParamFromHtml] = useState([]);

  useEffect(() => {
    importBlogPostsWithContent().then((data) => {
      setSearchData(data);
    });

    window.addEventListener("click", function (e) {
      if (
        document.getElementById("dropmenu") !== null &&
        !document.getElementById("dropdown").contains(e.target) &&
        !document.getElementById("searchTerm").contains(e.target)
      ) {
        setShowSearchResultModal(false);
      }
      if (
        document.getElementById("error-msg") !== null &&
        !document.getElementById("error-msg").contains(e.target) &&
        !document.getElementById("searchTerm").contains(e.target)
      ) {
        document.getElementById("error-msg").style.display = "none";
      }
    });
  }, [searchResult]);
  
// runsearch function
  const runSearch = (value) => {
    if (value.length === 0) return false;
    var condition = new RegExp(value.trim());

    setSearchParamFromTitle(
      searchData.filter((el) => condition.test(el.attributes.title))
    );

    if (serachParamFromTitle.length === 0) {
      setSearchParamFromHtml(
        searchData.filter((el) => condition.test(el.html))
      );
    }
  };

  const DropDown = ({ list }) => {
    return (
      <div
        className="flex  m-auto flex-col  absolute top-14 bg-slate-200 w-80 overflow-y-scroll h-96"
        id="dropmenu"
      >
        {list.map(({ attributes, slug }) => {
          if(window.location.pathname.includes("blog/post")){
            return (
              <div className="static">
                <Link href={slug} key={attributes.title} >
                  <p className=" p-1 m-1 bg-white">{attributes.title}</p>
                </Link>
              </div>
            );
          }else{
            return (
              <div className="static">
                <Link href={`blog/post/${slug}`} key={attributes.title}>
                  <p className=" p-1 m-1 bg-white">{attributes.title}</p>
                </Link>
              </div>
            );
          }
        })}
      </div>
    );
  };

  // render search list
  const renderSearchList = () => {
    if (serachParamFromTitle.length !== 0) {
      return <DropDown list={serachParamFromTitle} />;
    }

    if (serachParamFromHtml.length !== 0) {
      return <DropDown list={serachParamFromHtml} />;
    } else
      return (
        <div
          className=" border m-auto flex-col absolute top-14 bg-slate-200 w-80  h-fit p-3"
          id="error-msg"
        >
          please search with valid terms
        </div>
      );
  };

  return (
    <React.Fragment>
      <nav className="border-red-800 border flex flex-row justify-between flex-wrap sticky top-0 z-50 backdrop-brightness-75 h-12">
        <img
          src="/img/1200px-whio_blue_duck_at_staglands_akatarawa_new_zealand.jpg"
          alt="this is alt"
          className="w-10 h-10 mx-10 "
        />
        <div className="w-fit " id="dropdown">
          <input
            type="search"
            name="searchTerm"
            id="searchTerm"
            value={searchTerm}
            className=" rounded h-10 w-80 px-4"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              runSearch(e.target.value);
              if (e.target.value.length === 0) {
                setSearchParamFromHtml([]);
                setSearchParamFromTitle([]);
              }
            }}
            onInput={() => {
              setShowSearchResultModal(true);
              function name() {
                document.getElementById("error-msg").style.display = "";
              }
              document.getElementById("error-msg") !== null && name();
            }}
            onFocus={() => {
              setShowSearchResultModal(true);
              function name() {
                document.getElementById("error-msg").style.display = "";
              }
              document.getElementById("error-msg") !== null && name();
            }}
          />

          {showSearchResultModal &&
            searchTerm.length !== 0 &&
            renderSearchList()}
        </div>

        <div className="mx-10 border-red-800 border">
          <Link href={"/"} className="mx-4 px-3 py-2">
            home
          </Link>
          <Link href={"/blog?page=1"} className="mx-4 px-3 py-2">
            blog
          </Link>
          <Link href={"/about"} className="mx-4 px-3 py-2">
            about
          </Link>
        </div>
      </nav>

      <main className="flex flex-col">{children}</main>
    </React.Fragment>
  );
};

export default Layout;
