 const routes= require('./routes/index.js');

//inicializamos express
const express=require('express');

//inicializar una aplicacion de express
const app=express();


//middleware 
//app.use(express.json);

//abrir el puerto
app.set("port",3000);



app.use('/',routes);


app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`)
  })
