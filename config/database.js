const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("Db ka connection successful")})
    .catch((error)=>{
        console.log("Ussue in db connection");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports=dbConnect;