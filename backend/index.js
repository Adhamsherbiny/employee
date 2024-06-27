import express from "express"
import mysql from "mysql"
import cors from "cors"
const port = 5000
const app = express()
app.use(cors({
    origin: "*",
    methods:["POST" , "GET"],
    credentials: true
}))
app.use(express.json())

const DBCON = mysql.createConnection({
    host:"blreoo8niqn2jjskadlv-mysql.services.clever-cloud.com",
    user: "utxnktank6pwkllr",
    password: "Ne8sl2S1zkpVceojXtmk",
    database: "blreoo8niqn2jjskadlv"
})

app.get("/" , (req , res)=>{
   res.send(`Hello in our Server Port Number ${port}`)
    
})

app.get("/itemdefinition" , (req , res)=>{
    DBCON.query("select * from item_definition" , (err , result)=>{
        if (err) throw err
        else{
            res.send(result)
        }
    })
    
})

app.listen(port ,()=>{
    console.log(port)
})