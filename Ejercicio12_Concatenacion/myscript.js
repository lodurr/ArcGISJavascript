const names = ['Marcos', 'Lucia','Susana','Rocio','Alfonso']

const longNames = names.filter(namef=>namef.length > 6).map(namef => namef.toLowerCase());
alert(longNames);