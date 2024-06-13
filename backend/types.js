const zod=require("zod");


const createTodo=({
    title: zod.string(),
    description: zod.string(),

})


const updateTodo=({
    id: zod.string(),

})

module.exports={
    createTodo: createTodo,
    updateTodo: updateTodo
}

