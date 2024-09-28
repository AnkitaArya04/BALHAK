const mongoose=require("mongoose");

const url="mongodb+srv://<password>@cluster0.wovmh18.mongodb.net/";

mongoose.set("strictQuery",true);
mongoose.connect(url,{

}).then(()=>{
    console.log("Connection Successfully")
}).catch((err)=>{
    console.log("no Connection")
})
