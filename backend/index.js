const {express}=require ("express")
const app=express()

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Testing")
})


app.post("/create",(req,res)=>{
    res.send("Created a todo")
})

app.put("/completed",(req,res)=>{
    res.send("Error");

})