const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const programs = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/import-data.json`)
);

const getAllPrograms = (req, res) => {
  console.log(req.requestTime);

  res.json({
    status: "success",
    requestedAt: req.requestTime,
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

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

const programRouter = express.Router();
const userRouter = express.Router();

app.use("/programs", programRouter);
app.use("/users", userRouter);

programRouter.route("/").get(getAllPrograms).post(createProgram);

programRouter
  .route("/:id")
  .get(getProgram)
  .patch(updateProgram)
  .delete(deleteProgram);

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log(`running on port ${port}...`);
});
