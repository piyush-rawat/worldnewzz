const express = require("express");
const router = express.Router();

const axios = require("axios");

router.get("/", async (req, res) => {
  const { country } = req.query;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=100`
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
