## environment variables / Variables de Entorno
## Las variables de entorno se deben configurar en un archivo .env dentro de la carpeta /src

DB_USER = usuarioDB
DB_PASSWORD = contraseñaDB
DB_SERVER = ipDB
DB_DATABASE = nombreDB
PORT = puertoServidorLocal

Listar usuarios:
http://localhost:8081/api/users

Listar usuario por pass y user:
http://localhost:8081/api/prueba/users/Ventilador/brandon

Crear usuario:
http://localhost:8081/api/users

{
      "user": "Martin",
      "pass":"5555",
      "role": "Delivery",
      "name": "Martin Montero"
}

Eliminar usuario:
http://localhost:8081/api/users/4578/pablito

Listar usuario por ID:
http://localhost:8081/api/prueba/users/21/

Listar tiendas:
http://localhost:8081/api/stores

Listar tiendas por ID
http://localhost:8081/api/stores/1

Crear tienda:
http://localhost:8081/api/stores

{
      "name": "McDonald's",
      "description": "Opciones de servicio: Consumo en el lugar · Para llevar · Entrega sin contacto",
      "lon": "-32.9750781",
      "lat": "-68.8228081",
      "address": "Av. San Martín 1202"
}

Eliminar tienda por id:
http://localhost:8081/api/stores/2

Listar clientes:
http://localhost:8081/api/clients

Listar clientes por ID:
http://localhost:8081/api/clients/1

Crear clientes:
http://localhost:8081/api/clients
{
      "address": "Calle SiempreViva 742",
      "lat":"-225454641",
      "lon": "-445575451"
      
}

Eliminar cliente por id:
http://localhost:8081/api/clients/1

Listar ventas por ID de usuario
http://localhost:8081/api/sales/1

Crear venta:
http://localhost:8081/api/sales
{
      "amount": "1580",
      "description":"Tallarines con salsa bolognesa + postre copado",
      "codUser": "1",
      "codStore": "4"
      
}

Listar envios pendientes:
http://localhost:8081/api/shipments

