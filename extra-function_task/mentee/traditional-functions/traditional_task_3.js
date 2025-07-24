// 🧠 STEP 1: Define a function named task
// - Use `function task() {}` for traditional
// - Use `const task = () => {}` for arrow function
function task() {
  const word = "level";
  const reversed = word.split("").reverse().join("");
  const isP = word === reversed;
  console.log(isP);
  document.getElementById("output").textContent = isP;
}
// ["l", "e", "v", "e", "l"]
// ["l", "e", "v", "e", "l"]
// 🛠️ STEP 2: Declare any variables needed inside the function

// 🔍 STEP 3: Do the main calculation or logic
// - Examples: multiply numbers, check condition, loop through array

// 📤 STEP 4: Output the result
// - Use console.log()
// - Also use document.getElementById("output").textContent to show result on screen

// 🧪 STEP 5: Call the function to test it
