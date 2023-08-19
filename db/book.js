
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://sahilbhatiya90:1tHWEYJg6rHlWNpn@gujju.4z6qqjf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected for booking');
})
.catch((e)=>{
    console.log('failed');
})




const bookTableSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true // This ensures each email is unique in the collection
    },
    mobile: {
      type: String,
      required: true // Change to false if mobile is not mandatory
    },
    date: {
      type: Date,
      required: true // Change to false if date is not mandatory
    },
    time: {
      type: String,
      required: true // Change to false if time is not mandatory
    },
    people: {
      type: String,
      required: true // Change to false if the number of people is not mandatory
    }
  });
  
  const BookTableCollection = new mongoose.model('BookTableCollection', bookTableSchema);
  
  module.exports = BookTableCollection
  
  
  
  
  
  
  