
const users = [];
function getUser() {
    return users;
}
function getRandomId() {
    return Math.random().toString().slice(2, 8);
}
function createUser(user) {
    if(isUserameExists(user.username)) {
        throw new Error('user ${user.username} already exists');
    }
        const newUser = {
        id: getRandomId(),
        username: user, username,
        password: user, password,
        fullName: user, fullName,
        birthDate: user, birthDate,
        created: new Date(),
    };
    users.push(newUser)
}
function getUserByUsernameAndPassword(username, password) {

}