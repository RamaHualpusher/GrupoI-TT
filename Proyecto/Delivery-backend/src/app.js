import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes.js";
import morgan from "morgan";

import config from "./config.js";

const app = express();

// Configuraciones
app.set("port", config.port);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use("/api", productRoutes);

export default app;
