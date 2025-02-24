const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("¡Servidor Express funcionando!");
});

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});