const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  res.send("coffee server is getting hotter");
});

app.listen(port, () => {
  console.log(`Coffee server is running port ${port}`);
});
