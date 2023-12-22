const express = require("express")
const morgan = require("morgan")
const database = require("./database")

//confic inicial
const app = express()
app.set(`port`,4000)



app.listen(app.get("port"))
console.log(`escucuando comuniciaicon al puerto 4000`);

//midelwares
app.use(morgan("dev"))


//rutaas
app.get("/productos", async (req, res) => {
    
      const conexion = await  database.getConnetion(); 
      const result = await conexion.query("SELECT * from productos");
      res.json(result)
      
    
  });