const { getToDos, deleteToDo, updateToDo, addToDo, getToDoById } = require("./todos");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("go to /todo/get").end()
});

app.post("/", function(req, res) {
    res.send("go to /todo/set").end()
});

app.delete("/", function (req, res) {
    res.send("go to /todos/delete").end()
});

app.put("/", function(req, res) {
    res.send("go to /todos/update").end()
});

app.get("/todo/get", function (req, res) {
    res.send(getToDos()).end()
});

function callBack(req, res) {
    const { name, lastname } = req.params;
    res.send("my name is " + name + " " + lastname).end();
}

app.get(`/api/meet/:name/:lastname`, callBack)


function _getToDoById(req, res) {
    debugger;
    const { Id } = req.params;
    res.send(JSON.stringify(getToDoById(Id))).end();
}

app.get(`/api/getToDoById/:Id/`, _getToDoById);


app.post("/todo/set", function(req, res) {
    res.send(setToDos()).end()
});
function callBack(req, res) {
const {name, lastname} = req.params;
res.send("my name is " + name + " " +lastname).end();
}
app.post('/api/meet/:name/:lastname', callBack)

function _setToDoById(req, res) {
    debugger;
    const {Id} = req.params;
    res.send(JSON.stringify(setToDoById(Id))).end();
}

app.post(`/api/setToDoById/:Id/`, _setToDoById);





app.listen(3000, () => console.log("Hi Nivi Im Port 3000"))
