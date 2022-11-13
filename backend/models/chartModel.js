const db = require("../config/db");

const chart = {
  getV1monthly: function (callback) {
    return db.query("SELECT * FROM v1_monthly", callback);
  },
};

module.exports = chart;
