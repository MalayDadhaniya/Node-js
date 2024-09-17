const express = require("express");
const users = require("./MOCK_DATA.json");

app = express();

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const output = users.find((user) => user.id === id);
    return res.json(output);
  })
  .patch((req, res) => {
    return res.json({ status: "panding" });
  })
  .delete((req, res) => {
    return res.json({ status: "panding" });
  });

app.post("/api/users", (req, res) => {
  return res.json({ status: "panding" });
});

app.listen(8080, () => console.log("Server Started!"));

// display Home msg
// app.get("/", (req, res) => {
//     return res.end("Wellcome to Home Page");
// })

// display Users First Name in Html Doc. path:/users
// app.get("/users", (req, res) => {
//     const html = `<ul>
//     ${users.map(user => `<li>${user.first_name}</li>`).join(" ")}
//     </ul>`
//     return res.send(html);
// })

// display Users json data on /api/users
// app.get("/api/users", (req, res) => {
//     return res.json(users);
// })
