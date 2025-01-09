const express = require("express");

// Setup
const app = express();

app.listen(3000);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

// Get Requests
app.get("/", (req,res) => {
	res.render("index");
});

// 404 Page
app.use((req,res) => {
	res.status(404).render("404", {
		title:"404"
	});
});