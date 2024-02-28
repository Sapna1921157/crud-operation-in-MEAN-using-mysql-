const express = require('express');
const router = express.Router();

const overview = require('../controllers/crud.controller');

router.get(
    "/description",
    // auth.verifyToken,
    overview.description
  )

  module.exports=router;