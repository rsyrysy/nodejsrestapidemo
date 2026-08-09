const { poolPromise } = require('../config/db');

exports.getAllStudents = async (req, res, next) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Student');
    res.json(result.recordset);
  } catch (err) {
    next(err);
  }
};
