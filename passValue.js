function changeValue(x) {
    x = 10;
}

let num = 5;
changeValue(num);
console.log(num); // Output: 5 (tidak berubah)

function changeProperty(obj) {
    obj.name = "baru";
}

let person = { name: "John" };
changeProperty(person);
console.log(person.name); // Output: baru (telah berubah)
