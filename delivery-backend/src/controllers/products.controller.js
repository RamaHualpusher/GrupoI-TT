import { getConnection, querys, sql } from "../database/index.js";

//
//USUARIOS
//


//Consultamos todos los usuarios
export const getUser = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsers);
    res.json(result.recordset);
    console.log('Se consultaron todos los usuarios: ');
    console.log(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
  
//Creamos un nuevo usuario
export const createNewUser = async (req, res) => {
  const { user, pass, role, name} = req.body;
  let { quantity } = req.body;

  // validamos que no ingresen datos nulos
  if (user == null || pass == null) {
    return res.status(400).json({ msg: "Error, no ha ingresado datos" });
  }
 

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("user", sql.VarChar, user)
      .input("pass", sql.Text, pass)
      .input("role", sql.Text, role)
      .input("name", sql.Text, name)
      .query(querys.addNewUser);

    res.json({ user, pass, role, name});
    console.log(`Usuario ${user} agregado correctamente`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Consultamos usuario segun contraseña y usuario
export const getUserByPass = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("pass", req.params.pass)
      .input("user", req.params.user)
      .query(querys.getUsersByPass);
    console.log('Se realiza consulta de usuario:'+req.params.user+' contraseña: '+req.params.pass)  ;
    console.log(result.recordset[0]);  
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Eliminar usuario
export const deleteUserByPass = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("pass", req.params.pass)
      .input("user", req.params.user)
      .query(querys.deleteUser);

    if (result.rowsAffected[0] === 0) {
      console.log('No hay ningun usuario '+ req.params.user +' registrado en la Base de Datos');
      return res.sendStatus(404);
    }
    console.log('Se ha eliminado al usuario ' +  req.params.user)
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};




//
//LOCALES (STORES)
//


//Consultamos todas las tiendas/locales
export const getStore = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllStore);
    res.json(result.recordset);
    console.log('Se consultaron todos los locales: ');
    console.log(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
  
//Creamos un nuevo local
export const createNewStore = async (req, res) => {
  const { description, lon, lat, name} = req.body;
  

  // validamos que no ingresen datos nulos
  if (name == null || lon == null) {
    return res.status(400).json({ msg: "Error, no ha ingresado datos" });
  }
 

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("lon", sql.Text, lon)
      .input("lat", sql.Text, lat)
      .query(querys.addNewStore);

    res.json({ name, description, lon, lat});
    console.log(`Local ${name} agregado correctamente`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Consultamos local/tienda segun ID
export const getStoreById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getStoreById);
    console.log('Se realiza consulta al local :'+req.params.id);
    console.log(result.recordset[0]);  
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Eliminar local/tienda
export const deleteStoreById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteStore);

    if (result.rowsAffected[0] === 0) {
      console.log('No hay ningun local con el ID '+ req.params.id +' registrado en la Base de Datos');
      return res.sendStatus(404);
    }
    console.log('Se ha eliminado el local ' +  req.params.id)
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

