//  - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

function addItems(array: string[], index: number) {
    array.push("peach");
    return array;
}
function removeItems(array: string[], index: number) {
    array.pop();
    return array;
}
function updateQuantity(array: string[], index: number, value: string) {
     array.splice(index, 0, value);
     return array;
}

let myarray = ["apple", "orange", "banana", "grape", "pineapple", "dates"]

let additem = addItems(myarray,1);
console.log(additem)

let removeitem = removeItems(myarray,2);
console.log(removeitem)

let updatequantity = updateQuantity(myarray,0, "peach");
console.log(updatequantity)