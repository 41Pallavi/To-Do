const express=require("express")
const app=express();
const createToDo=require('./createToDo');
const updateToDo=require('./updateToDo');


app.use(express.json());


app.post("/todos",function(req,res){


})

app.get("/todos",function(req,res){
    

})

app.put("/completed",function(req,res){
    

})
