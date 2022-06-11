export const querys = {
  getAllUsers: "SELECT * FROM users",
  getUsersByPass: "SELECT id, name, role FROM users WHERE pass = @Pass AND [user]=@User",
  getUsersById: "SELECT id, name, role, [user] FROM users WHERE id = @idUser",
  addNewUser: "INSERT INTO users VALUES(@user, @pass, @role, @name);",
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
              A.id,A.description, (Select CONVERT(varchar,A.dayHour,100) 'dayHour'), A.amount,B.amount 'amountShip',C.description'status'
              FROM sale A
              INNER JOIN shipment B
              ON A.id = B.codSale
              INNER JOIN status C
              ON B.status = C.status
              WHERE A.codUser= @codUser ORDER BY A.dayHour desc` ,
  addNewSale: "INSERT INTO sale VALUES (@amount,@description,@codUser,getdate(),@codStore);",

  getAllShipment_0: "SELECT A.id,amount, dayHour , B.name 'nameStore' , codStore FROM shipment A INNER JOIN store B ON A.codStore = B.id where status=0  order by dayHour desc ",

};
