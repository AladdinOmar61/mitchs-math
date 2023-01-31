const express = require("express");
const morgan = require("morgan");

const programRouter = require("./routes/programRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use((req, res, next) => {
  console.log("hello");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})

// app.use(express.static(`${__dirname}/src`));

// app.use((req, res, next) => {
//   console.log("Hello from the middleware");
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString(); 
//   next();
// });

// app.use("/programs", programRouter);
// app.use("/users", userRouter);

//placement of route handlers are important b/c once res.json outputs, the request response 
//cycle ends and you may not see other operations occur as a result.

//in other words, getAll and post will not execute the code below (line 121-124), but getOne, update and delete will.
// app.use((req, res, next) => {
//   console.log("hello");
//   next();
// })

app.use('/users', userRouter);
app.use('/', programRouter);


module.exports = app;
