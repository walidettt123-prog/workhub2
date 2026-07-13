const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "workhub-secret-key",
    resave: false,
    saveUninitialized: false
}));

// Rutas
const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");

app.use("/", indexRoutes);
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ WorkHub iniciado en el puerto ${PORT}`);
});
