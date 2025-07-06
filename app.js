import express from 'express'


const app = express();
const port = 3000;

app.use(express.static("public"));

var blogPosts = [];
app.get('/', (req, res) => {
  res.render("home.ejs");
});

app.get('/compose', (req, res) => {
  res.render("compose.ejs");
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});