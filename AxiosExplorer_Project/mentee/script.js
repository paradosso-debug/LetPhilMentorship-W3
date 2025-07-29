// ✅ STEP 0:
// Select the <div> element that will display the result of each HTTP request.
// Use document.getElementById("output") and store it in a variable called output.

const output = document.getElementById("output");

// ✅ STEP 1:
// Add a click event listener to each button on the page.
// Use document.getElementById("BUTTON_ID").addEventListener("click", FUNCTION_NAME)
// Each button (GET, POST, PUT, etc.) should call a different function when clicked.

// "GET" button → should call a function named getData()
document.getElementById("getBtn").addEventListener("click", getData);

//"POST" button → should call postData()
document.getElementById("postBtn").addEventListener("click", postData);

// "PUT" button → should call putData()
document.getElementById("putBtn").addEventListener("click", putData);

// "PATCH" button → should call patchData()
document.getElementById("patchBtn").addEventListener("click", patchData);

// "DELETE" button → should call deleteData()
document.getElementById("deleteBtn").addEventListener("click", deleteData);

// "HEAD" button → should call headData()
document.getElementById("headBtn").addEventListener("click", headData);

// ✅ STEP 2:
// For each function, use async/await because we will be making HTTP requests to a fake API.
// Use try...catch to handle any errors that might happen during the request.

// 🔹 Function: getData()
// Use axios.get() to make a GET request to "https://jsonplaceholder.typicode.com/users"
// Show the response data in the output div using JSON.stringify(res.data, null, 2)

const url = `https://jsonplaceholder.typicode.com/users`;

async function getData() {
  console.log("hello world");

  try {
    const response = await axios.get(url);
    output.textContent = JSON.stringify(response.data, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
}

// JSON.stringify(value, replacer, space)

// 🔹 Function: postData()
// Use axios.post() to send new user data (like name and email) to the API
// Show the response (including the fake new user ID) in the output area

async function postData() {
  try {
    const response = await axios.post(url, {
      name: "alex",
      email: "hello@gmail.com",
    });
    output.textContent = JSON.stringify(response.data, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
}

// 🔹 Function: putData()
// Use axios.put() to completely replace a user with new data (name and email)
// Replace user with ID 1
// Display the returned updated user object in the output area

// 🔹 Function: patchData()
// Use axios.patch() to partially update a user (only send the email field)
// Update user with ID 1 and display the new info in the output area

// 🔹 Function: deleteData()
// Use axios.delete() to pretend to delete user with ID 1
// Show the empty object response {} from the fake API

// 🔹 Function: headData()
// Use axios.head() to get only the headers (not the data)
// Display the headers (res.headers) in the output area
