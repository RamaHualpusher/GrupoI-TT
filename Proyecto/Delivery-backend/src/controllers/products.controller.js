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
  const { user, pass, role, name } = req.body;
  let { quantity } = req.body;
  console.log('hola');
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

    res.json({ user, pass, role, name });
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
    console.log('Se realiza consulta de usuario:' + req.params.user + ' contraseña: ' + req.params.pass);
    console.log(result.recordset[0]);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Consultamos usuario segun contraseña y usuario
export const getUserByid = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("idUser", req.params.idUser)
      .query(querys.getUsersById);
    console.log('Se realiza consulta de usuario:' + req.params.idUser);
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
      console.log('No hay ningun usuario ' + req.params.user + ' registrado en la Base de Datos');
      return res.sendStatus(404);
    }
    console.log('Se ha eliminado al usuario ' + req.params.user)
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};




//
//------------------- LOCALES (STORES) -----------------------------
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
  const { description, lon, lat, name, address } = req.body;


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
      .input("address", sql.Text, address)
      .query(querys.addNewStore);

    res.json({ name, description, lon, lat });
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
    console.log('Se realiza consulta al local :' + req.params.id);
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
      console.log('No hay ningun local con el ID ' + req.params.id + ' registrado en la Base de Datos');
      return res.sendStatus(404);
    }
    console.log('Se ha eliminado el local ' + req.params.id)
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//------------------- Clientes -----------------------------



//Consultamos todas los clientes
export const getClient = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllClient);
    res.json(result.recordset);
    console.log('Se consultaron todos los clientes: ');
    console.log(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Creamos un nuevo cliente
export const createNewClient = async (req, res) => {
  const { address, lat, lon } = req.body;


  // validamos que no ingresen datos nulos
  if (address == null || lon == null) {
    return res.status(400).json({ msg: "Error, no ha ingresado datos" });
  }


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("address", sql.Text, address)
      .input("lat", sql.Text, lat)
      .input("lon", sql.Text, lon)

      .query(querys.addNewClient);

    res.json({ address, lat, lon });
    console.log(`Cliente ${address} agregado correctamente`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Consultamos cliente segun ID
export const getClientById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getClientById);
    console.log('Se realiza consulta al cliente :' + req.params.id);
    console.log(result.recordset[0]);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Eliminar cliente
export const deleteClientById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteClient);

    if (result.rowsAffected[0] === 0) {
      console.log('No hay ningun cliente con el ID ' + req.params.id + ' registrado en la Base de Datos');
      return res.sendStatus(404);
    }
    console.log('Se ha eliminado al  cliente ' + req.params.id)
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};





//------------------- VENTAS -----------------------------



//Creamos una nueva Venta
export const createNewSale = async (req, res) => {
  const { amount, description, codUser, codStore } = req.body;

  // validamos que no ingresen datos nulos
  if (amount == null || codUser == null) {
    return res.status(400).json({ msg: "Error, no ha ingresado datos" });
  }


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("amount", sql.Money, amount)
      .input("description", sql.Text, description)
      .input("codUser", sql.Int, codUser)
      .input("codStore", sql.Int, codStore)

      .query(querys.addNewSale);

    res.json({ amount, description, codUser, codStore });
    console.log(`Ha realizado la compra de  ${description}  correctamente`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Consultamos Venta segun Codigo de usuario
export const getSaleById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("codUser", req.params.codUser)
      .query(querys.getSaleById);

    console.log('Se realiza consulta de venta :' + req.params.codUser);
    console.log(result.recordset);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};




//------------------- ENVIOS -----------------------------
//Consultamos todas los enviós en estado pendiente

export const getShipment_0 = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllShipment_0);
    res.json(result.recordset);
    console.log('Se consultaron todos los envios pendientes sin tomar: ');
    console.log(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//------------------- Modificamos estado del envió -----------------------------
//--
//Creamos una nueva Venta
export const UpdateShipments = async (req, res) => {
  const { status, idPedido } = req.body;

  // validamos que no ingresen datos nulos
  if (status == null || idPedido == null) {
    return res.status(400).json({ msg: "Error, estado no valido" });
  }


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("status", sql.Int, status)
      .input("idPedido", sql.Int, idPedido)
      .query(querys.UpdateShipmentsStatus);

    res.json({ status });
    console.log(`Se ha actualizado el estado   ${status}  correctamente`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//--Consultamos todas las ordenes entrandes

export const getOrdernIn = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllOrderIn);
    res.json(result.recordset);
    console.log('Se consultaron todos los pedidos entrantes: ');
    console.log(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//--Consultamos todas las ordenes tomadas para mostrar en mapa



export const getOrdernInMap = async (req, res) => {
  try {
    const pool = await getConnection();
    console.log('Estoy Aca!!!!!!!!!!!')
    const result = await pool
      .request()
      .input("idPedido", req.params.idPedido)
      .query(querys.getAllOrderInMap);
    console.log('Se realiza consulta de envio para Mapa:' + req.params.idPedido);
    console.log(result.recordset);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getOrdernInMapR = async (req, res) => {
  try {
    const pool = await getConnection();
    console.log('Estoy Aca!!!!!!!!!!!')
    const result = await pool
      .request()
      .input("idPedido", req.params.idPedido)
      .query(querys.getAllOrderInMapR);
    console.log('Se consulta historia del recorrido correspondiente a venta:' + req.params.idPedido);
    console.log(result.recordset);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getOrderEnd = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllOrderEnd);
    res.json(result.recordset);
    console.log('Se consultaron todos los pedidos Finalizados: ');
    console.log(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


