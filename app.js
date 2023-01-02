const express = require('express');
const app = express();
const path = require('path');
const PORT  = 3000;

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.get('/', (req,res)=>{res.sendFile(path.resolve(__dirname, './views/home.html'))});

app.listen(PORT, ()=> console.log(`
Server listen in port ${PORT} 
http://localhost:${PORT}`));