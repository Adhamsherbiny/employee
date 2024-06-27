import express from "express"

const AdminRoute = express.Router()

AdminRoute.get("/admin" , (req , res)=>{
    res.send("Welcome in our Admin Panel")
})

export default AdminRoute