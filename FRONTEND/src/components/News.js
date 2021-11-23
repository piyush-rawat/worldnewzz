import React from "react";

import { useSelector } from "react-redux";

import { Card } from "react-bootstrap";

import LazyLoad from "react-lazyload";

const News = ({ data: { title, urlToImage, description } }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <LazyLoad height={200} once>
        <Card
          className="shadow-lg"
          style={{
            padding: 10,
            margin: 10,
            backgroundColor: theme == "light" ? "white" : "black",
            border: theme == "dark" && "1px solid #111",
          }}
        >
          <Card.Title className={`text-${theme == "light" ? "dark" : "light"}`}>
            {title}
          </Card.Title>
          <Card.Img src={urlToImage} />
          <Card.Text className={`text-${theme == "light" ? "dark" : "light"}`}>
            {description}
          </Card.Text>
        </Card>
      </LazyLoad>
    </>
  );
};

export default News;
