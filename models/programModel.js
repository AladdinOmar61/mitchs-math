const mongoose = require("mongoose");
const slugify = require('slugify');

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Program must have a name."],
    unique: true,
    trim: true,
    maxlength: [40, 'A program name must have 40 or less characters'],
    minlength: [10, "A program name must have 10 or more characters"]
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

//document middleware: runs ebfore .save() and .create() ONLY
programSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// eslint-disable-next-line prefer-arrow-callback
// programSchema.pre('save', function(next) {
//   console.log('Saving Document');
//   next();
// })

// eslint-disable-next-line prefer-arrow-callback
// programSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

//query middleware lec. 106



const Program = mongoose.model("Program", programSchema);

module.exports = Program;

