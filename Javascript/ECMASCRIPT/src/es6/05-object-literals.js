// Enhaced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("Santiago", 19, "Colombia", 1));