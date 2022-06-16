import sql from "mssql";
import config from "../config.js";
export { sql };

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error('Se ha producido un error al intentar conectar con la Base de Datos');
    console.error(error);
  }
};


