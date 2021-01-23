const fs = require("fs");
const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello from the server side of mitchs math",
//     app: "Mitchs Math",
//   });
// });

// app.post("/", (req, res) => {
//   res.send("You can post to this endpoint");
// });

const programs = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/import-data.json`)
);

app.get('/programs', (req, res) => {
  res.json({
    status: "success",
    results: programs.length,
    data: {
      programs,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}...`);
});
