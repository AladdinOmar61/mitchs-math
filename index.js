const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server side of mitchs math",
    app: "Mitchs Math",
  });
});

app.post("/", (req, res) => {
  res.send("You can post to this endpoint");
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}...`);
});