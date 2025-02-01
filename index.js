const PORT = 8000;
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views/pages");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("Runing on port:", PORT);
});
