const express = require("express");
const programController = require("./../controllers/programController");

const router = express.Router();

// router.param("id", programController.checkID);

router
  .route("/")
  .get(programController.getAllPrograms)
  .post(programController.createProgram);

router
  .route("/:id")
  .get(programController.getProgram)
  .patch(programController.updateProgram)
  .delete(programController.deleteProgram);

module.exports = router;
