import mongoose from 'mongoose' //to connect to MongoDB

const studentSchema = new mongoose.Schema( //schema of student
    {
        name : String,
        age : Number,
        city : String
    }
)

const Student = mongoose.model("Student" , studentSchema) //model of student to perform operations on it (CRUD)

export default Student  //to use it in other files (index.js)
   