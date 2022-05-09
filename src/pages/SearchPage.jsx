import React, { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const searchInput = useRef();

  // const { search } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmitSearch = (e) => {
    e.preventDefault();

    setSearchParams({ q: searchInput.current.value });
    // setSearchParams({ q: searchInput.current.value, category: 'food' });
  };

  useEffect(() => {
    //   console.log("q=", search);

    if (searchParams.get("q")) {

      console.log("useSearchParams ", searchParams.get("q"));
      //  console.log("useSearchParams ", searchParams.get("category"));

      //set value to input
      searchInput.current.value = searchParams.get("q");

      //fetch api
      console.log("fetch api");
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={onSubmitSearch}>
        <input type="search" ref={searchInput} />
        <button>go</button>
      </form>
    </div>
  );
};

export default SearchPage;
