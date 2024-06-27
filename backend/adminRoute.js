import express from "express"
import DBCON from "./db.js"

const AdminRoute = express.Router()

AdminRoute.get("/admin" , (req , res)=>{
    res.send("Welcome in our Admin Panel")
})

AdminRoute.get("/employee" , (req , res)=>{
    DBCON.query("SELECT * FROM employee_info" , (err , result)=>{
        if(err) throw err
        else{
            res.status(200).json({result})
        }
    })
})

export default AdminRoute