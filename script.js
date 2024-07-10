function inputArray() {
    var input = document.getElementById("inputforA").value;
    var array = input.split(",").map(function(ele) {
        return parseInt(ele.trim(), 10);
    });
    display(array); // Call the display function with the array
}

function display(array) {
    var ans = document.getElementById("answer");
    ans.innerHTML = ""; // Clear previous content

    var par = document.createElement("p");
    par.textContent = "The array is: " + array.join(', '); // Join array elements into a string
    ans.appendChild(par); // Append the paragraph to the answer div
}
