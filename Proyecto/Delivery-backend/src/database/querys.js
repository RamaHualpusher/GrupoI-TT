export const querys = {
  getAllUsers: "SELECT * FROM users",
  getUsersByPass: "SELECT id, name, role FROM users WHERE pass = @Pass AND [user]=@User",
  getUsersById: "SELECT id, name, role, [user] FROM users WHERE id = @idUser",
  addNewUser: "INSERT INTO users VALUES(@user, @pass, @role, @name,'','');",
  deleteUser: "DELETE FROM users WHERE pass = @Pass AND [user]=@User",
  
  getAllStore: "SELECT * FROM store",
  getStoreById: "SELECT id, name, description, lon, lat, address FROM store WHERE id = @Id",
  addNewStore: "INSERT INTO store VALUES(@name, @description, @lon, @lat, @address);",
  deleteStore: "DELETE FROM store WHERE id = @Id",

  getAllClient: "SELECT * FROM client",
  getClientById: "SELECT id, address, lon, lat FROM client WHERE id = @Id",
  addNewClient: "INSERT INTO client VALUES (@address, @lat,@lon ,0);",
  deleteClient: "DELETE FROM client WHERE id = @Id",


  getSaleById: `
              SELECT
              A.id,A.description, (Select CONVERT(varchar,A.dayHour,100) 'dayHour')'dayHour', A.amount,B.amount 'amountShip',C.description'status'
              FROM sale A
              INNER JOIN shipment B
              ON A.id = B.codSale
              INNER JOIN status C
              ON B.status = C.status
              WHERE A.codUser= @codUser ORDER BY A.dayHour desc` ,

  addNewSale: "INSERT INTO sale VALUES (@amount,@description,@codUser,getdate(),@codStore);",

  getAllShipment_0: "SELECT A.id,amount, dayHour , B.name 'nameStore' , codStore FROM shipment A INNER JOIN store B ON A.codStore = B.id where status=0  order by dayHour desc ",

  getAllOrderIn: "SELECT  B.id , D.name 'nameClient' ,A.description, A.amount,B.amount 'amountShip', (Select CONVERT(varchar,A.dayHour,100) 'dayHour')'dayHour',C.description'status',E.name 'nameStore',E.addresss,E.lon, E.lat      FROM sale A  INNER JOIN shipment B  ON A.id = B.codSale INNER JOIN status C  ON B.status = C.status  INNER JOIN users D  ON  B.codUser= D.id  INNER JOIN store E ON  E.id= b.codStore where B.status=0 ORDER  BY A.dayHour desc",

  UpdateShipmentsStatus: "UPDATE shipment SET status=@status  where id=@idPedido ;",

  getAllOrderInMap: "SELECT  top 1 B.id , D.name 'nameClient' ,A.description, A.amount,B.amount 'amountShip', (Select CONVERT(varchar,A.dayHour,100) 'dayHour')'dayHour',C.description'status',E.name 'nameStore',E.addresss'addressStore',  F.address 'addressClient',E.lon 'lonStore', E.lat 'latStore', D.lon 'lonUser', D.lat 'latUser'   FROM sale A  INNER JOIN shipment B  ON A.id = B.codSale INNER JOIN status C  ON B.status = C.status  INNER JOIN users D  ON  B.codUser= D.id  INNER JOIN store E ON  E.id= b.codStore   INNER JOIN client F ON  D.id= F.codUser where  B.status=3 and B.id=@idPedido ORDER  BY A.dayHour desc",
  
  getAllOrderEnd: "SELECT   B.id , D.name 'nameClient' ,A.description, A.amount,B.amount 'amountShip', (Select CONVERT(varchar,A.dayHour,20) 'dayHour')'dayHour',C.description'status',E.name 'nameStore',E.addresss'addressStore',  F.address 'addressClient',E.lon 'lonStore', E.lat 'latStore', D.lon 'lonUser', D.lat 'latUser'   FROM sale A  INNER JOIN shipment B  ON A.id = B.codSale INNER JOIN status C  ON B.status = C.status  INNER JOIN users D  ON  B.codUser= D.id  INNER JOIN store E ON  E.id= b.codStore   INNER JOIN client F ON  D.id= F.codUser where  B.status=1 ORDER  BY A.dayHour desc",

  

};

