const express = require("express");
const mysql = require("mysql2");

// Setup
const app = express();

app.listen(3000);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var pool = mysql.createPool({
	connectionLimit: 100,
	host: "localhost",
	database: "incrementalcore",
	port: 3306,
	user: "SomeUserName",
	password: "glw39tbce4$1C4WUS*q6bb0EDqCDLY9JAe2I$NexQdjKQzYtis685@kS#20UB7C$SZM4*z712I6HDjdlH98ycv0nG6X&M@pgWXT*noBR71v&zuYBUeIAfZWG6FbKjx6P"
});


// Get Requests
app.get("/", (req,res) => {
	res.render("index");
});
app.post("/game", (req,res) => {
	user = req.body.username;
	console.log("user: "+user);
	try {
		pool.getConnection(function (err,con) {
			if(err) console.error(err);
			con.query("SELECT user_id FROM users WHERE name = '"+user+"'",
				function (err1,result) {
					if(err1) throw err1;
					if(result.length > 0) {
						console.log("SELECT: "+result[0].user_id);
						res.render("game", {userid: result[0].user_id});
					}
					else {
						con.query("INSERT INTO users (name) VALUES('"+user+"')",
							(err2,result2) => {
								if(err2) throw err2;
								console.log("INSERT");
								con.query("SELECT user_id FROM users WHERE name = '"+user+"'",
									function (err3,result3) {
										if(err3) throw err3;
										if(result3.length > 0) {
											console.log("SELECT2");
											res.render("game", {userid: result3[0].user_id});
										}
									});
							});
					}
			});
		});
	} catch (err) {console.error(err);}
	// console.log("userID: "+u);
	// res.render("game", {userid: -1});
});



// 404 Page
app.use((req,res) => {
	res.status(404).render("404", {
		title:"404"
	});
});