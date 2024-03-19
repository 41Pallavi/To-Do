const express=require("express")
const app=express();


const { createToDo }=require("./type");
const { updateToDo }=require("./type");

const cors=require("cors")

app.use(cors())

const { todo } =require('./db')


app.use(express.json());


app.post("/todos",async function(req,res){

    const createPayload=req.body;
    const parsedPayload=createToDo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return ;
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo is created"
    })
})

app.get("/todos",async function(req,res){
    const todos=await todo.find({})
    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateToDo.safeParse(updatePayload)

    if (parsedPayload.error) {
        res.status(400).json({
            msg: "Invalid update payload",
            error: parsedPayload.error.message
        });
        return;
    }

    // Assuming todo is your Mongoose model
    try {
        await todo.updateOne({
            _id: parsedPayload.data._id
        }, {
            completed: true
        });

        res.json({
            msg: "Todo is marked as completed"
        });
    } catch (error) {
        console.error("Error marking todo as completed:", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
})
app.listen(3000,()=>{
    console.log("server is running on 3000 port")
})
