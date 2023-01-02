const clientDB = require("../../database");

const putNote = (req, res) => {
  try {
    const { id } = req.params;
    const { title, url, description, likes } = req.body;

    if (!title || !url || !description || !likes) {
      res.status(400);
      res.send("los parametros no estan completos");
    }

    const querySql = `UPDATE POSTS SET IMG = '${url}', titulo = '${title}', descripcion = '${description}', likes = ${likes} WHERE id = ${id}`;

    clientDB.query(querySql, function (err, result) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error al actualizar el post");

        throw err;
      }

      if (result.rowCount === 0) {
        res.status(400);
        res.send("hubo un error al actualizar el post");

        return;
      }

      res.status(202);
      res.send("post actualizado correctamente por el ferxxo");

      return;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = putNote;
