const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://sahilbhatiya90:1tHWEYJg6rHlWNpn@gujju.4z6qqjf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected for login');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: false,
        unique: true // This ensures each email is unique in the collection
    },
    gender: {
        type: String,
        required: false // Change to true if gender is mandatory
    },
    mobile: {
        type: String,
        required: false // Change to true if mobile is mandatory
    },
    state: {
        type: String,
        required: false // Change to true if state is mandatory
    }
    
    
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection;




