let express = require("express")
let mongoose = require("mongoose");
let app = express();
let router = express.Router();
app.set('view engine', 'ejs');

/* app.get(("*"), (req, res) => {
    res.sendFile(__dirname+"/views/error.html")

}); */

app.get("/", (req, res)=>{
    let name = "nachman";
    res.render("index", {name:name})
});

app.get("/add", (req, res) =>{
    res.render("add")
})

/* router.get("/hello/:name", (req, res) =>{
    
    res.send( "hi " + req.params.name + "!!!");

})
 */
/* router.get("/hello", (req, res) =>{
    
    res.send("hello world", "\n", "hi" + req.param.name + "!!!");

})
 */
let port = 1121;
app.use(express.static(__dirname + "/public"))
app.listen(port);
console.log(`http://localhost:${port}/`);