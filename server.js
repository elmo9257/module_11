const express = require("express");

const homeRoutes = require("./routes/homeroutes");

const app = express();

const PORT = process.env.PORT || 3001;

// Built in express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Custome middleware including routes
app.use("/", homeRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
