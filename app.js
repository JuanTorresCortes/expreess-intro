const express = require("express");
const movies = require("./movies");
const app = express();
const PORT = 3000;

//grt is read
//app.get ("url endpoint", 'callback function with req, res as parameters)

app.get("/", (req, res) => {
  res.status(200).json({ data: movies });
});

app.get("/action", (req, res) => {
  const actionFilms = movies.filter((elem) => {
    return elem.Genre.includes("Action");
  });
  //console.log(actionFilms)
  res.status(200).json({ data: actionFilms });
});

//dynamic
app.get("/genre/:genreName", (req, res) => {
  //http://localhost:3000/genre/action
  //console.log(req.params) // { genreName: 'action' }
  const genre = req.params.genreName.toLowerCase(); // action

  const filterByGenre = movies.filter((film) => {
    return film.Genre.toLowerCase().includes(genre);
  });
  res.status(200).json({ data: filterByGenre });
});

app.get("/date", (req, res) => {
  const filterByDate = movies.filter((film) => {
    return film.Year > 2010;
  });
  res.status(200).json({ data: filterByDate });
});

app.get("/title/:titleName", (req, res) => {
  const title = req.params.titleName.toLowerCase(); 
  const filterByTitle = movies.filter((film) => {
    return film.Title.toLowerCase().includes(title);
  });
  res.status(200).json({ data: filterByTitle });
});

app.get("/about", (req, res) => {
  res.status(200).send("hello from express");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
