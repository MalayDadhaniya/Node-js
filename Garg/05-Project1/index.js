const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

//middleware to parse JSON data
app.use(express.json());  // <-- Add this line

app
    .route("/api/users/:id")
    .get((req, res) => {
        const myId = Number(req.params.id);
        const user = users.find((user) => user.id === myId);
        return res.json(user);
    })
    .patch((req, res) => {
        // Edit user:
        const myId = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === myId);
        users[userIndex] = { ...users[userIndex], ...req.body };

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            return res.json({ status: "User edited", user: users[userIndex] });
        });
    })
    
    .delete((req, res) => {
        // delete user:
        const myId = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === myId);
        const deletedUser = users.splice(userIndex, 1)[0];
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            return res.json({ status: "User deleted", id: deletedUser.id });
        });
    });
    

app.post("/api/users", (req, res) => {
    // create new user:
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if (err) {
            return res.json({ status: "Error", message: "Failed to save user" });
        }
        return res.json({status: "Success", id: users.length});
    });
});

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));

//REST API
// app.get("/api/users", (req, res) => {
//     res.json(users);
// });

// html document
// app.get("/users", (req, res) => {
//     const html = `
//         <ul>
//             ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//         </ul>
//     `
//     res.send(html);
// });

// dynamic route
// app.get("/api/users/:id", (req, res) => {
//     const myId = Number(req.params.id);
//     const user = users.find((us) => us.id === myId);
//     return res.json(user);
// });
