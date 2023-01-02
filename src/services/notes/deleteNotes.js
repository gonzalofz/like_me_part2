const clientDB = require("../../database");

const deleteNote = (req, res) => {
  try {
    const { id } = req.params;
    const querySql = `DELETE FROM POSTS WHERE id = ${id}`;

    clientDB.query(querySql, function (err, result) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error al eliminar el post");

        throw err;
      }

      if (result.rowCount === 0) {
        res.status(400);
        res.send("hubo un error al eliminar el post");

        return;
      }

      res.status(200);
      res.send("post eliminado correctamente por el ferxxo");

      return;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = deleteNote;
