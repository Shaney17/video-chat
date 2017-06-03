const express = require('express');

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);

const port = 3000 || process.env.PORT;

app.get("/", (req, res) => res.render("home.html"));

app.listen(port, () => console.log("Server is running"));
