import express from "express"
import AdminRoute from "./adminRoute.js"
import DBCON from "./db.js"
import cors from "cors"
const port = 5000
const app = express()

app.use("/route" , AdminRoute)
app.use(cors({
    origin: "*",
    methods:["POST" , "GET"],
    credentials: true
}))
app.use(express.json())



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
    console.log("Server is running")
})