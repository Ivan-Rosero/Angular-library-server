const { response } = require("express");
const Libro = require("../model/libro");

const crearLibro = async (req, res = response) => {
  const _id = req._id;
  const { titulo } = req.body;

  try {
    const titleExists = await Libro.findOne({ titulo });

    if (titleExists) {
      return res.status(405).json({
        ok: false,
        msg: "405, el libro ya existe",
        error: req.url,
      });
    }

    const libro = new Libro({
      libro: _id,
      ...req.body,
    });

    await libro.save();

    res.status(200).json({
      ok: true,
      msg: "200 success",
      _id: libro.id,
      url: libro.url,
      libro,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      ok: false,
      msg: "400, bad request",
    });
  }
};

const getLibro = async (req, res = response) => {
  const libros = await Libro.find();

  res.status(200).json({
    ok: true,
    msg: "200 success",
    libros,
  });
};

const getDetailBook = async (req, res = response) => {
  const id = req.params.id;

  try {
    const books = await Libro.findById(id);

    if (!books) {
      return res.status(404).json({
        ok: false,
        msg: "El libro no existe",
      });
    }
    res.status(200).json({
      ok: true,
      books,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      ok: false,
      msg: "400, bad request",
    });
  }
};

const updateBook = async (req, res = response) => {
  const id = req.params.id;

  try {
    const books = await Libro.findById(id);
    console.log(books)
    if (!books) {
      return res.status(404).json({
        ok: false,
        msg: "El libro no existe",
      });
    } else {
        console.log(books)
    }

  } catch (err) {
    console.error(err);
    res.status(400).json({
      ok: false,
      msg: "400, bad request",
    });
  }
};

module.exports = {
  crearLibro,
  getLibro,
  getDetailBook,
  updateBook
};
