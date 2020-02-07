let express = require("express");
let app =  express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
  // res.send("Hello this is the main page");
  res.render("login");
});


// app.get("index", (req, res)=>{
  
// });


app.listen(3000, process.env.PORT, ()=>{
  console.log("This server has started")
});

//STEP 1 Sign in or Sign up form 
  // set up database for a user's username, fullname & password
  // form validation
  // responsive
//STEP 2 Homepage 
  // List all of the user's favorite movies, movie name, imbd id, movie poster
  // search (user input) + append "poster" = i.e user input (Batman Begins) or use OMDB poster key
// STEP 3 Add new favorite movie
  //User input name, 3 similar searches appear on screen
  //User selects on to add to fav, and is added to the list on homepage    
// STEP 4 Delete a movie
  // Before deletion prompt user to delete
  // Remove from database  
