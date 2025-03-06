const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
   let pricesofItems= document.querySelectorAll(".price")
    let sum=0; 

	pricesofItems.forEach((item) =>{
		 sum += parseFloat(item.innerText) || 0
	})

	const tr= document.createElement('tr')
	const td = document.createElement('td')

	 td.colSpan=2; 
	 td.innerText=`Total Price : ${sum.toFixed(2)}`

	tr.appendChild(td)
	 // Append to table body (assuming table exists)
    const table = document.querySelector("table tbody"); // Ensure a table body exists
     table.appendChild(tr)
	
};

getSumBtn.addEventListener("click", getSum);

