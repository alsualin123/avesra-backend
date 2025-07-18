const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Para permitir llamadas desde tu GitHub Pages

app.get("/", (req, res) => {
  res.send("¡Backend de AVESRA funcionando!");
});

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde el backend de AVESRA 👋" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
