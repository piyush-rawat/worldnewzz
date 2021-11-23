import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import News from "../components/News";
import Spinner from "../components/Spinner";

import { getTopHeadlines } from "../redux/actions/newsActions";
import { SET_LOADING } from "../redux/constants/constants";

const HomePage = () => {
  const { country_name, country } = useSelector((state) => state.country);
  const { loading, news, error_msg } = useSelector((state) => state.news);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    dispatch(getTopHeadlines(country));
  }, [country]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : error_msg ? (
        <h1 className="text-center mt-5">{error_msg}</h1>
      ) : (
        <>
          <h1
            className={`text-center m-2 text-${
              theme == "light" ? "dark" : "light"
            }`}
          >
            Top Headlines {country_name}
          </h1>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 400: 1, 600: 2, 900: 3 }}
          >
            <Masonry>
              {news.map((n) => (
                <News key={Math.random()} data={n} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </>
      )}
    </>
  );
};

export default HomePage;
