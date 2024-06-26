import express from "express"
import mysql from "mysql"
import cors from "cors"
const port = 5000
const app = express()
app.use(cors())
app.use(express.json())

const DBCON = mysql.createConnection({
    host:"127.0.0.1",
    user: "root",
    password: "",
    database: "employees"
})

app.get("https://employee-server-phi.vercel.app/" , (req , res)=>{
   res.send(`Hello in our Server Port Number ${port}`)
    
})

app.get("https://employee-server-phi.vercel.app/employee" , (req , res)=>{
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