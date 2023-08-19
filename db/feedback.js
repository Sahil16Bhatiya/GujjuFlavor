const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://sahilbhatiya90:1tHWEYJg6rHlWNpn@gujju.4z6qqjf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected for Feedbacks');
})
.catch((e)=>{
    console.log('failed');
})

const feedbackSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true // This ensures each email is unique in the collection
    },
    mobile: {
        type: String,
        required: true // Change to true if mobile is mandatory
    },
    message:{
        type: String,
        required: true
    }



})

const FeedbackCollection=new mongoose.model('FeedbackCollection',feedbackSchema)

module.exports=FeedbackCollection;