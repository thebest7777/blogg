import express  from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
let posts=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.render("index.ejs",{posts:posts});
});
app.get("/post",(req,res)=>{
    res.render("contact.ejs");
});
app.post("/submit",(req,res)=>{
    const obj={
        title:req.body["email"],
        bod:req.body["text"],
    };
    posts.push(obj);
    res.redirect("/");
});
app.listen(port,()=>{
    console.log("The blog is live at "+port);
});
