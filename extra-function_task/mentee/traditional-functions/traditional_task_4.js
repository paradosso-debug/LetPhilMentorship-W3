// 🧠 STEP 1: Define a function named task
// - Use `function task() {}` for traditional
// - Use `const task = () => {}` for arrow function
function task() {
  const numbers = [1, 4, 5, 7, 8, 0];
  const total = numbers.reduce((sum, num) => sum + num, 0);
  console.log(total);
  document.getElementById("output").textContent = total;
}
// 1 + 4 + 5 + 7 + 8 + 0
// sum = 0, num = 1 => sum = 0 + 1 = 1
// sum = 1, num = 4 => sum = 1 + 4 = 5
// sum = 5, num = 5 => sum = 5 + 5 = 10

// 🛠️ STEP 2: Declare any variables needed inside the function

// 🔍 STEP 3: Do the main calculation or logic
// - Examples: multiply numbers, check condition, loop through array

// 📤 STEP 4: Output the result
// - Use console.log()
// - Also use document.getElementById("output").textContent to show result on screen

// 🧪 STEP 5: Call the function to test it
