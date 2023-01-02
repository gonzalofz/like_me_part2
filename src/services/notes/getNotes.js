const clientDB = require("../../database");

const getNotes = (req, res) => {
  try {
    const querySql = `SELECT * FROM POSTS`;
    clientDB.query(querySql, function (err, result) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error al traer el un post");

        throw err;
      }

      res.status(200);
      res.json(result.rows);

      return;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = getNotes;
