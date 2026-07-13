const express = require("express");

const router = express.Router();

// Mostrar formulario de login
router.get("/", (req, res) => {
    res.render("login");
});

// Procesar login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin123") {
        res.send(`
            <h1>✅ Login correcto</h1>
            <p>Bienvenido, ${username}</p>
            <a href="/">Volver al inicio</a>
        `);
    } else {
        res.send(`
            <h1>❌ Usuario o contraseña incorrectos</h1>
            <a href="/admin">Volver a intentarlo</a>
        `);
    }
});

module.exports = router;
