const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

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

app.get("/", (req, res) => {
  res.json({
    status: "success",
    results: programs.length,
    data: {
      programs,
    },
  });
});

app.get("/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const program = programs.find((el) => el.id === id);

  // if (id > programs.length) {
  if (!program) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

  res.json({
    status: "success",
    data: {
      program,
    },
  });
});

app.post("/", (req, res) => {
  const newId = programs[programs.length - 1].id + 1;
  const newProgram = Object.assign({ id: newId }, req.body);
  programs.push(newProgram);
  fs.writeFile(
    `${__dirname}/dev-data/import-data.json`,
    JSON.stringify(programs),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          program: newProgram,
        },
      });
    }
  );
});

app.patch("/:id", (req, res) => {
  if (req.params.id * 1 > programs.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      program: "<Updated tour here>",
    },
  });
});

app.delete("/:id", (req, res) => {
  if (req.params.id * 1 > programs.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }

  res.status(204).json({
    status: "success",
    data: "null",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}...`);
});
