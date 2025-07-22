const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Permitir solicitudes desde tu frontend en GitHub Pages
app.use(cors({
  origin: "https://alsualin123.github.io" // ← Asegúrate que esta URL es correcta
}));

app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Usuario de prueba
  if (email === "admin@avesra.com" && password === "123456") {
    res.status(200).json({ message: "Inicio de sesión correcto" });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas" });
  }
});

app.get("/", (req, res) => {
  res.send("Servidor backend de AVESRA funcionando correctamente ✅");
});

app.listen(port, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${port}`);
});
