const express = require("express");
const { router } = require("./routes/home");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(5000, () => {
  console.log(`server running on port 5000`);
});
