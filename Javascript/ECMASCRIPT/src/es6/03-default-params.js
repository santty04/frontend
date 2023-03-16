function newUser(name, age, country) {
    var name = name || 'Santiago';
    var age = age || 19;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'MX');

function newAdmin(name= 'Santiago', age = 19, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 29, 'MX');