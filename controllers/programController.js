/* eslint-disable node/no-unsupported-features/es-syntax */
const Program = require("../models/programModel");

exports.getAllPrograms = async (req, res) => {
  try {
    console.log(req.query);

    //Filtering
const queryObj = {...req.query};
const excludedFields = ['page', 'sort', 'limit', 'fields'];
excludedFields.forEach(el => delete queryObj[el]);

    //Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
    console.log(JSON.parse(queryStr))

    //{ name: "Algebra I" price: { $gte: 100 } }
    
    //on postman it should look like: 127.0.0.1:3000/?name=Algebra I&price[gte]=5
    //lecture 96 advance filtering for more details/refresher, code doesnt apply to this project
    // gte, gt, lte, lt

    let query = await Program.find(queryObj);

    // Sorting
    //I think this only works for number values for now
    if(req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy);
      query = query.sort(sortBy);
      // sorting by more than one critera postman: 127.0.0.1:3000/?sort=price,ratingsAverage
      //sort('price ratingsAverage)
    } else {
      query = query.sort('-createdAt');
    }

    // Field Limiting
    //postman: fields=name,duration,etc.

    if(req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v')
    }


    
    // const programs = await Program.find({
    //   name: 'Algebra I'
    // });

    const programs = await query;

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
