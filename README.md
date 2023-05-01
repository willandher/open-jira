# Next.js OpenJira App
Para correr localmente se necesita la base de datos 

```
docker-compose up -d 
```
* el -d, significa __detached__
* MongoDB Url Local: 
````
mongodb://localhost:27017/entriesdb
````
## Creación de los enviroments. 

Renombrar el archivo __.env.template__ a .env

## Llenar la base de datos con información de prueba 
Llamarar : 
```
http://localhost:3000/api/seed
```

