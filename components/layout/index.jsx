import React, { useEffect, useState } from "react";
import Link from "next/link";

import { BiAlignMiddle } from "react-icons/bi";
import importBlogPostsWithContent from "../../logicFunctions/getPostWithContent";
import Logo from "../partials/Logo";
import ComputerNav from "../partials/ComputerNav";
import MobileNav from "../partials/MobileNav";
import SearchResultDropdown from "../partials/SearchResultDropdown";
import { TextField } from "@mui/material";
import Footer from "../Footer";
import Scrolltotop from "../partials/Scrolltotop";

const Layout = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [makeblur, setMakeblur] = useState(false);
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
  }, [searchResult,showSearchResultModal,setShowSearchResultModal]);

  // runsearch function
  const runSearch = (value) => {
    if (value.length === 0) return false;
    var condition = new RegExp(String(value.trim()));

    setSearchParamFromTitle(
      searchData.filter((el) => condition.test(el.attributes.title))
    );

    if (serachParamFromTitle.length === 0) {
      setSearchParamFromHtml(
        searchData.filter((el) => condition.test(el.html))
      );
    }
  };

  // render search list
  const renderSearchList = () => {
    if (serachParamFromTitle.length !== 0) {
      return <SearchResultDropdown list={serachParamFromTitle.slice(0,7)} />;
    }

    if (serachParamFromHtml.length !== 0) {
      return <SearchResultDropdown list={serachParamFromHtml.slice(0,7)} />;
    } else
      return (
        <div
          className="flex  m-auto flex-col  relative top-[7px] w-full h-14 z-50 align-middle text-center bg-red-500"
          id="error-msg"
        >
          <p>{`sorry data is not available`}</p>
        </div>
      );
      };

  return (
    <div >
      <nav className=" flex flex-col justify-between flex-grow sticky top-3 h-12 my-16 shadow-md rounded-md z-50 w-[98vw]">
        <div className="flex w-[98vw] justify-between flex-shrink">
        <Logo />
        <div className="w-fit" id="dropdown">
          <TextField
          variant="standard"
          placeholder="please search"
            type="search"
            name="searchTerm"
            id="searchTerm"
            value={searchTerm}
            className=" rounded h-10 px-4 lg:w-[40rem] sm:w-64 md:w-80"
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
              setMakeblur(true)
              function name() {
                document.getElementById("error-msg").style.display = "";
              }
              document.getElementById("error-msg") !== null && name();
            }}
            onBlur={()=>setMakeblur(false)}
          />
          {/* search result modal */}
          {showSearchResultModal &&
            searchTerm.length !== 0 &&
            renderSearchList()}
        </div>
        
          <BiAlignMiddle
            className="h-fit p-1 w-10 lg:hidden sm:block md:block mx-4"
            onClick={() => setShowNav((prev) => !prev)}
          />

        <ComputerNav />
        </div>
        <div>
          {/* for mobile navigation */}
      {!showNav ? null : <MobileNav />}
        </div>
      </nav>

{makeblur ? <main className="flex flex-col blur-xl"  >{children}</main> : <main className="flex flex-col scroll-smooth"  >{children}</main>}
<Scrolltotop />
<Footer />
    </div>
  );
};

export default Layout;
