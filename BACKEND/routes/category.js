const express = require("express");
const axios = require("axios");
const router = express();

router.get("/", async (req, res) => {
  const { country, category } = req.query;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );
    if (response.data.status == "ok" && response.data.articles) {
      return res.json({ news: response.data.articles });
    }
    return res.json({ error_msg: "Server Error. Please try again later." });
  } catch (error) {
    console.log(error);
    return res.json({ error_msg: "Server Error. Please try again later." });
  }
});

module.exports = router;
