const paymentMethod = document.getElementById("payment-method")
const itemName = document.getElementById("item-name")
const date = document.getElementById("date")
const amount = document.getElementById("amount")
const addNewExpense = document.getElementById("button").addEventListener('click',add)

function add(){
  const tableBody = document.getElementById('tbody')
  const tableRow = document.createElement('tr')
  tableBody.appendChild(tableRow);

  const typeCell = document.createElement('td')
  typeCell.textContent = paymentMethod.value;
  tableRow.appendChild(typeCell)
  
  const nameCell = document.createElement('td')
  nameCell.textContent = itemName.value;
  tableRow.appendChild(nameCell)

  const dateCell = document.createElement('td')
  dateCell.textContent = date.value;
  tableRow.appendChild(dateCell)

  const amountCell = document.createElement('td')
  amountCell.textContent = amount.value;
  tableRow.appendChild(amountCell)

  itemName.value = ""
  date.value= ""
  amount.value = ""

} 