const { Router } = require("express");
const { crearLibro, getLibro, getDetailBook, updateBook } = require("../controllers/inventario");
const { validateFields } = require("../middlewares/validaciones");
const { check } = require("express-validator");

const router = Router();

router.post("/list", [
  check("titulo", "El título es obligatorio").not().isEmpty(),
  check("autor", "El autor es obligatorio").not().isEmpty(),
  check("publicacion", "La publicación es obligatoria").not().isEmpty(),
  check("editorial", "La editorial es obligatoria").not().isEmpty(),
  check("categoria", "La categoría es obligatoria").not().isEmpty(),
  check("sede", "La sede es obligatoria").not().isEmpty(),
  validateFields
], crearLibro,
);

router.get("/list", getLibro);

router.get("/list/:id", getDetailBook);

router.put("/list", updateBook);

router.delete("/list", (req, res) => {
  return res.json({
    ok: true,
    msg: "Libro eliminado",
  });
});

module.exports = router;
