function generateTable() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
  
    if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10) {
      alert("Please enter numbers between 2 and 10");
      return;
    }
  
    const output = document.getElementById("tableOutput");
    output.innerHTML = "";
  
    const table = document.createElement("table");
  
    for (let i = 1; i <= start; i++) {
      const row = document.createElement("tr");
      for (let j = 1; j <= end; j++) {
        const cell = document.createElement("td");
        cell.textContent = i * j;
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    output.appendChild(table);
  }
  