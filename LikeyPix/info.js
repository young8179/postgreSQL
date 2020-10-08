const row = {
    id: 5,
    name: 'bob',
    address: '123 street st',
    category: 10
}
// Destructuring syntax
// 1. creates variables
// 2. assigns values using the corresponding keys from the obj
const {id, name, address, category} = row;
// equivalent:
const id = row.id;
const name = row.name;
const address = row.address;
const category = row.category;