const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const root = __dirname;

["css", "js", "fonts", "images", "views"].forEach((dir) => {
  app.use(`/${dir}`, express.static(path.join(root, dir)));
});

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on ${PORT}`);
});
