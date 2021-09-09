const Program = require("./../models/programModel");

// const programs = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/import-data.json`)
// );

exports.getAllPrograms = async (req, res) => {
  try {
    console.log(req.query);

    const programs = await Program.find({
      name: "Geometry",
    });

    // const programs = await Program.find().where("duration").equals(5).where("difficulty").equals("easy");

    res.json({
      status: "success",
      results: programs.length,
      data: {
        programs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    //Program.findOne({ _id: req.params.id })
    res.status(200).json({
      status: "success",
      data: {
        program,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createProgram = async (req, res) => {
  try {
    const newProgram = await Program.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        program: newProgram,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.updateProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        program,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.deleteProgram = async (req, res) => {
  try {
    await Program.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
