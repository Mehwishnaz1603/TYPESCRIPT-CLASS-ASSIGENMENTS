// Part 1: Employee Data
type Employee = {
    bio:{
          name:string,
          department:string, 
          role: "Manager" | "Engineer" | "Intern"
          skills?:string[]
     },
    contact:{
            phone:number;
            email: string;
      },
};
let employee1 = {
    name: "Mehwish",
    department:"Giaic",
    role:"Intern",
    skills:["HTML","CSS"],
},
    contact:{
    phone: 923343302800,
    email: "mehwishnaz1603@gmail.com"
};
console.log(employee1);

// Part 2:
type Car = {
    engineWithCar:{
        horoscope: number;
    }
}
function getHoroscope(any) {
};

//Part 3
type Product = 
     { name: string; 
       price: number;
    inventory: { 
        stock: number; 
        colorOptions: string[], };
};
let products: Product[] = [     // Create array of product in objects
{   
    name: "T-shirt", 
    price: 800, 
inventory: { 
    stock: 80, 
    colorOptions: ["red", "blue", "green","black"], }
},];

function changeColor(product: Product, newColor: string): void { //Implement a function that takes  product object and new color as input
switch (newColor) {                                            // Implementation and Adjust price based on the new color 
case "red": 
product.price *= 1.1;              ;                  // Increase 10% price
break;
case "blue":
product.price *= 0.95;                                // Decrease  5% price
break;
};
product.inventory.colorOptions.push(newColor);        // Update the color property of the product
}''
products.forEach(product => {                         // Display product details
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Stock: ${product.inventory.stock}`);
console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
console.log("<<==-----<<==------==>>------==>>");
});

console.log("Changing color of T-shirt to red:");    // Example usage of changeColor function
changeColor(products[0], "red");
console.log("New Price of T-shirt to blue:", products[0].price);
console.log("Updated Available Colors:", products[0].inventory.colorOptions);
