const zod=require('zod');

const createToDo=zod.object({
    title:string(),
    description:string()
})

const updateToDo=zod.object({
    id:string()
})

module.exports={
    createToDo:createToDo,
    updateToDo:updateToDo
}