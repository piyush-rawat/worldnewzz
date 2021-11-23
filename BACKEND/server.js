if (process.env.NODE_ENV == "development") {
  require("dotenv").config();
}
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

app.use(compression());

app.use(express.static("public"));

app.use("/top-headlines", require("./routes/top-headlines"));
app.use("/category", require("./routes/category"));
app.use("/search", require("./routes/search"));

app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Running"));
