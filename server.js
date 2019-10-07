const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.set("port", process.env.PORT || 3001);
app.locals.title = "Connections";
app.locals.snacks = [
  { id: 1, name: "Almonds", delicious: true },
  { id: 2, name: "Avocado", delicious: true },
  { id: 3, name: "Pizza", delicious: true },
  { id: 4, name: "Tacos", delicious: true }
]

app.get("/", cors(), (request, response) => {
  const { snacks } = app.locals;
  return response.status(200).json( snacks );
});

// app.get("/", (request, response) => {
//   const { snacks } = app.locals;
//   return response.status(200).json( snacks );
// });

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});

