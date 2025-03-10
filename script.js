// Create and add the button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let pricesofItems = document.querySelectorAll(".price");
    let sum = 0;

    pricesofItems.forEach((item) => {
        sum += parseFloat(item.innerText) || 0; // Convert to float and handle NaN
    });

    const table = document.querySelector("table tbody"); // Get the table body

    if (!table) {
        console.error("Table or <tbody> not found!");
        return; // Prevent further execution if table is missing
    }

    let totalRow = document.querySelector("#ans"); // Check if row already exists

    if (totalRow) {
        // If it exists, update the total price
        totalRow.querySelector("td").innerText = `Total Price : ${sum}`;
    } else {
        // If it doesn't exist, create and append a new row
        const tr = document.createElement("tr");
        tr.setAttribute("id", "ans"); // Unique ID to prevent duplicates
        const td = document.createElement("td");

        td.colSpan = 2;
        td.innerText = `Total Price : ${sum}`;
        tr.appendChild(td);

        table.appendChild(tr);
    }
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);


