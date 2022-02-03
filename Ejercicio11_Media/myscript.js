const times = [60, 75, 79, 80, 55, 59];

const reducer = (accumulator, curr) => accumulator + curr;
alert(times.reduce(reducer)/times.length);