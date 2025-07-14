var employee1 = {
    name: "Mehwish",
    department: "Giaic",
    role: "Intern",
    skills: ["HTML", "CSS"],
}, contact;
console.log(employee1);
function getHoroscope(any) {
}
;
var products = [
    {
        name: "T-shirt",
        price: 800,
        inventory: {
            stock: 80,
            colorOptions: ["red", "blue", "green", "black"],
        }
    },
];
function changeColor(product, newColor) {
    switch (newColor) { // Implementation and Adjust price based on the new color 
        case "red":
            product.price *= 1.1;
            ; // Increase 10% price
            break;
        case "blue":
            product.price *= 0.95; // Decrease  5% price
            break;
    }
    ;
    product.inventory.colorOptions.push(newColor); // Update the color property of the product
}
'';
products.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(', ')));
    console.log("<<==-----<<==------==>>------==>>");
});
console.log("Changing color of T-shirt to red:"); // Example usage of changeColor function
changeColor(products[0], "red");
console.log("New Price of T-shirt to blue:", products[0].price);
console.log("Updated Available Colors:", products[0].inventory.colorOptions);
changeColor(products[1], "blue");
console.log("New Price of T-shirt:", products[1].price);
console.log("Updated Available Colors:", products[1].inventory.colorOptions);
