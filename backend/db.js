
require("dotenv").config()

const mongoose=require('mongoose')

mongoose.connect(process.env.URI)

const MySchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})

const todo=mongoose.model('todos',MySchema);
module.exports={
    todo
}
