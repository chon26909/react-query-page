import React, { useRef } from "react";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";

const HomePage = () => {

  const searchInput = useRef();     //ref input element
  const navigate = useNavigate();

  const onSubmitSearch = () => {

    const dataSearch = {
      q: searchInput.current.value,
    };

    navigate({
      pathname: "search",
      search: createSearchParams(dataSearch).toString(),
    });

  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={onSubmitSearch}>
        <input type="search" ref={searchInput} />
        <button>go</button>
      </form>
    </div>
  );
};

export default HomePage;
