
//const er en konstant variabel der ikke kan ændres.
const express = require('express');
//lav nu 1 indstands (1 element)
const app = express();

//når man starter appen kører den port 3000 
app.listen(3000, (err) => {
    if (err) {
       console.log(err);
    }
//dette er for at vise om serveren virker..
    console.log('App is listening on http://localhost:3000');
 });
