const zod=require('zod');

const createToDo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateToDo=zod.object({
    _id:zod.string()
})

module.exports={
    createToDo:createToDo,
    updateToDo:updateToDo
}