const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
  return res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.send(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.send(user);
  })
  .put((req, res) => {
    res.send("pandding");
  })
  .delete((req, res) => {
    res.send("pandding");
  });

app.post("/api/users", (req, res) => {
  return res.send("Create User");
});

app.listen(7000, () => console.log("Server Started !"));
