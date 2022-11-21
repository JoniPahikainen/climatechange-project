const chartModel = require("../models/chartModel");
const jwt = require("../config/jwt");

const getV1 = (req, res) => {
  chartModel.getV1((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    return res
      .status(200)
      .json({ resMonthly: result[0], resAnnual: result[1], resV2: result[2] });
  });
};

const getV3 = (req, res) => {
  chartModel.getV3((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: "No data found." });
    }
    return res
      .status(200)
      .json({ resMonthly: result[0], resAnnual: result[1] });
  });
};

module.exports = {
  getV1,
  getV3,
};
