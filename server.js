const express = require("express");
const blogs = require("./public/model/blogs.json");
const people = require("./public/model/people.json");

const app = express();

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "IT Blogs"
  });
});

app.get("/profile", (req, res) => {
    const person = people.profiles.find(p => p.firstname === req.query.firstname);
    const blog = people.profiles.find(x => x.blog_name === req.query.firstname);

    res.render("profile", {
        person
  });
});

//app.get("/mongo", (req, res) => {
//    const person = people.profiles.find(p => p.firstname === req.query.firstname);
//    res.render("profile", {
//        title: `About ${person.firstname} ${person.lastname}`,
//        person
//  });
//});

app.get('/blogs', function (req, res) {
    res.render(__dirname + '/views/blogs.pug');
});

app.get('/quiz', function (req, res) {
    res.render(__dirname + '/views/quiz.pug');
});


// Set the port. When this is not 8080, Azure will not show this but this could be adjusted with config
const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});