require('dotenv').config();
const express = require('express');
const app =express();
const cors = require('cors');
//Socket:-
const {Server} = require('socket.io');
const io= new Server(8000);


const PORT = process.env.Port || 8080

io.on("connection",(socket)=>{
    console.log(`Socket Connected: ${socket.id}`)
})

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>res.send('Hello World !'))
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));


