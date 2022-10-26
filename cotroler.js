function _getToDoById(req, res) {
    debugger;
    const { Id } = req.params;
    res.send(JSON.stringify(getToDoById(Id))).end();
}
app.get("/", function (req, res) {
    res.send("go to /todo/get").end()
});

app.get("/todo/get", function (req, res) {
    res.send(getToDos()).end()
});

function callBack(req, res) {
    const { name, lastname } = req.params;
    res.send("my name is " + name + " " + lastname).end();
}