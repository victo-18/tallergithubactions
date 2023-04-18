const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Configuración de Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de las rutas
app.get("/", (req, res) => {
  res.send("TALLER GITHUB ACTIONS");
});

app.listen(3000, () => console.log("Api funcionando puerto 3000"));
const objetos = [
  { id: 1, nombre: "Marcela", descripcion: "Personaje del año" },
  { id: 2, nombre: "Patroclo", descripcion: "Actor de pelicula" },
  { id: 3, nombre: "Maximo", descripcion: "General de roma" },
  { id: 4, nombre: "Aquiles", descripcion: "Casador implacable" },
];
// Ruta para obtener todos los objetos
app.get("/objetos", (req, res) => {
  res.send(objetos);
});

// Ruta para obtener un objeto específico por ID
app.get("/objetos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const objeto = objetos.find((o) => o.id === id);
  if (objeto) {
    res.send(objeto);
  } else {
    res.status(404).send("Objeto no encontrado");
  }
});

// Ruta para agregar un nuevo objeto
app.post("/objetos", (req, res) => {
  const objeto = req.body;
  objetos.push(objeto);
  res.send("Objeto agregado");
});

// Ruta para actualizar un objeto existente por ID
app.put("/objetos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const objetoIndex = objetos.findIndex((o) => o.id === id);
  if (objetoIndex !== -1) {
    objetos[objetoIndex] = req.body;
    res.send("Objeto actualizado");
  } else {
    res.status(404).send("Objeto no encontrado");
  }
});

// Ruta para eliminar un objeto existente por ID
app.delete("/objetos/:id", (req, res) => {
  const id = parseInt(req.POSTarams.id);
  const objetoIndex = objetos.findIndex((o) => o.id === id);
  if (objetoIndex !== -1) {
    objetos.splice(objetoIndex, 1);
    res.send("Objeto eliminado");
  } else {
    res.status(404).send("Objeto no encontrado");
  }
});
