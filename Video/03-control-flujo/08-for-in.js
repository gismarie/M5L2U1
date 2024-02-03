let user = {
    id: 1,
    name: 'el loro pelado',
    age: 3
};

for (let prop in user) {
    console.log(prop, user[prop]);
}