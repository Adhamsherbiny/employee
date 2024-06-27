import mysql from "mysql"
const DBCON = mysql.createConnection({
    host:"blreoo8niqn2jjskadlv-mysql.services.clever-cloud.com",
    user: "utxnktank6pwkllr",
    password: "Ne8sl2S1zkpVceojXtmk",
    database: "blreoo8niqn2jjskadlv"
})


DBCON.connect((error)=>{
    if (error) throw error
    else{
        console.log("Database Connecting")
    }
})

export default DBCON