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
    host:"127.0.0.1",
    user: "root",
    password: "",
    database: "employees"
})

app.get("/" , (req , res)=>{
   res.send(`Hello in our Server Port Number ${port}`)
    
})

app.get("/employee" , (req , res)=>{
    DBCON.query("select * from employee_info" , (err , result)=>{
        if (err) throw err
        else{
            res.send(result)
        }
    })
    
})

app.listen(port ,()=>{
    console.log(port)
})