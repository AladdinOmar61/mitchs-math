const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

const programs = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/import-data.json`)
);

const getAllPrograms = (req, res) => {
  res.json({
    status: "success",
    results: programs.length,
    data: {
      programs,
    },
  });
};

const getProgram = (req, res) => {
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
};

const createProgram = (req, res) => {
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
};

const updateProgram = (req, res) => {
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
};

const deleteProgram = (req, res) => {
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
};

// app.get("/", getAllPrograms);
// app.get("/:id", getProgram);
// app.post("/", createProgram);
// app.patch("/:id", updateProgram);
// app.delete("/:id", deleteProgram);

app.route("/").get(getAllPrograms).post(createProgram);

app.route("/:id").get(getProgram).patch(updateProgram).delete(deleteProgram);

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}...`);
});
