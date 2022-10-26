const { getToDos, deleteToDo, updateToDo, addToDo } = require("./todos");
const http = require("http");

function onRequest(req, res) {
    res.end(JSON.stringify(getToDos()));
}

const server = http.createServer(onRequest);

server.listen(3000, () => {
    console.log("server is up")
});
