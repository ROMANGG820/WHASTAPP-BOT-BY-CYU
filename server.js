
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("DARK USA BOT SERVER ONLINE!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("DARK USA BOT SERVER ONLINE!");
});
