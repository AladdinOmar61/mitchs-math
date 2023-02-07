/* eslint-disable node/no-unsupported-features/es-syntax */
const Program = require("../models/programModel");
const APIFeatures = require('../utils/apiFeatures');
//skipping aggregation pipelines                                            

exports.getAllPrograms = async (req, res) => {
  try {
    console.log(req.query);

    const features = new APIFeatures(Program.find(), req.query).filter().sort().limitFields();
    const programs = await features.query;

    res.status(200).json({
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
    //same as Program.findOne({_id: req.params.id})

    res.status(200).json({
      status: "success",
      data: {
        program,
      },
    });
  } catch(err) {
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
} catch(err) {
  res.status(400).json({
    status: 'fail',
    message: err
  })
}
};

exports.updateProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      status: "success",
      data: {
        program
      }
    });
  } catch(err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent'
    })
  }

};

exports.deleteProgram = async (req, res) => {
  try {
    //same as line 94
    // const program = await Program.findById(req.params.id);

    // program.deleteOne(req.body);

    Program.findByIdAndDelete(req.params.id);

    console.log(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch(err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
    
};
