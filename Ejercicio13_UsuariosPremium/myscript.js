const users = [
    { username: 'ppc90', age: 30, premium: false },
    { username: 'lu65', age: 24, premium: true },
    { username: 'maria3', age: 36, premium: false },
    { username: 'abc123', age: 30, premium: false },
    { username: 'sergio58', age: 30, premium: true },
];

const searchPremium = users.filter(users => users.premium == true)
for (i =0; i<searchPremium.length;i++ ){
    console.log("El usuario " + searchPremium[i].username + " es premium");
}

const searchNoPremium = users.filter(users => users.premium == false)
console.log(searchNoPremium)
