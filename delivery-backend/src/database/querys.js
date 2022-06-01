export const querys = {
  getAllUsers: "SELECT * FROM users",
  getUsersByPass: "SELECT name, role FROM users WHERE pass = @Pass AND [user]=@User",
  addNewUser: "INSERT INTO users VALUES(@user, @pass, @role, @name);",
  deleteUser: "DELETE FROM users WHERE pass = @Pass AND [user]=@User",
  
  getAllStore: "SELECT * FROM store",
  getStoreById: "SELECT id, name, description, lon, lat FROM store WHERE id = @Id",
  addNewStore: "INSERT INTO store VALUES(@name, @description, @lon, @lat);",
  deleteStore: "DELETE FROM store WHERE id = @Id"

};
