
const container = document.getElementById("container");
  container.innerHTML = "<p>Life values</p>"; // Adds a paragraph
   const image = document.getElementById("image");
  image.setAttribute("src", "new-image.jpg"); // Updates the image source 

  const text = document.getElementById("text");
  text.classList.add("bold"); // Adds a class
  text.classList.remove("highlight"); // Removes a class

   const list = document.getElementById("list");
  const addButton = document.getElementById("add");

  addButton.addEventListener("click", () => {
    const newItem = document.createElement("li"); // Create new list item
    newItem.textContent = "New Item"; // Set its text
    list.appendChild(newItem); // Add it to the list
  }); 
  const alertButton = document.getElementById("alert");
  alertButton.addEventListener("click", () => {
    alert("Button clicked!");
  }); 



