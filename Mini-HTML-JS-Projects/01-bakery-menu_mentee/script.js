// STEP 1: Create an array to store your dessert options
// Each item is an object that describes the dessert
// The object contains:
// - name: the dessert’s name (string)
// - price: the cost of the dessert (number)
// - inStock: whether it’s available (true/false)
const desserts = [
  { name: "Banana in chocolote", price: 5, inStock: true },
  { name: "Carrot Cake", price: 8.5, inStock: false },
  { name: "Apple Pie", price: 6.8, inStock: true },
];

console.log("Step 1: Dessert list created", desserts);

// STEP 2: Select the elements where we'll add buttons and show messages
// Use getElementById to connect JS to the HTML elements with id="menu-buttons" and id="order-summary"

let menuButtons = document.getElementById("menu-buttons");
let orderSum = document.getElementById("order-summary");

console.log("Step 2: Selcted DOM Elements", menuButtons, orderSum);

// STEP 3: Loop through each dessert in the array using forEach
// This will let us do something (create a button) for every dessert

desserts.forEach((dessert) => {
  console.log("Step 3: Creating button for:", dessert.name);

  const button = document.createElement("button");

  button.textContent = dessert.name;

  button.addEventListener("click", function () {
    console.log(`Step 6: ${dessert.name} button clicked`);
    if (dessert.inStock) {
      orderSum.textContent = `You selected: ${dessert.name}, $${dessert.price}`;
      console.log(`step 7: ${dessert.name} is in stock `);
    } else {
      orderSum.textContent = `“Sorry, ${dessert.name} is sold out.`;
      console.log(`step 7.2 ${dessert.name} sold out`);
    }
  });
  menuButtons.appendChild(button);
  console.log(`step 8. button for ${dessert.name} added`);
});

// STEP 4: Inside the loop, create a button using document.createElement("button")

// STEP 5: Set the button’s text to show the dessert name

// STEP 6: Add a click event to the button using addEventListener
// This means when the button is clicked, a function will run

// STEP 7: Inside the function, check if the dessert is in stock using if/else
// If inStock is true, show “You selected: [Dessert] ($[Price])”
// If inStock is false, show “Sorry, [Dessert] is sold out.”

// STEP 8: Add the button to the div with appendChild

// const numbers = [1,2,3]
// numbers.forEach((num) =>{
//  console.log(num * 3)
// })

// const numbers = [4, 5, 6];
// const doubled = numbers.map((num) => {
//   return num * 2;
// });
// console.log(doubled);
