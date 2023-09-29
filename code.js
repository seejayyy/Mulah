const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const data_url = "https://raw.githubusercontent.com/seejayyy/Mulah/main/Table_Input.csv";
const global_data = [];
// read csv here
// FileReader Object
fetch(data_url)
    .then(response => response.text())
    .then(data => {
        // table 1
        let rows = data.split("\n");
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].split(",");
            let row = table1.insertRow();
            for (let j = 0; j < cells.length; j++) {
                let cell = row.insertCell();
                cell.innerText = cells[j];
                global_data.push(cells[j]);
            }
        }


        //table1.innerHTML = str1;
        // table 2
        let row1 = table2.insertRow();
        let cell1 = row1.insertCell();
        cell1.innerText = "Category"
        let cell2 = row1.insertCell();
        cell2.innerText = "Value"

        //first row of table 2
        let row2 = table2.insertRow();
        cell1 = row2.insertCell();
        cell1.innerText = "Alpha"
        cell2 = row2.insertCell();
        // get A5 + A20
        let a5 = global_data[global_data.indexOf("A5")+1];
        let a20 = global_data[global_data.indexOf("A20")+1];
        let output = parseInt(a5) + parseInt(a20);
        cell2.innerText = output;

        //second row of table 2
        let row3 = table2.insertRow();
        cell1 = row3.insertCell();
        cell1.innerText = "Beta"
        cell2 = row3.insertCell();
        // get A15 / A7
        let a15 = global_data[global_data.indexOf("A15")+1];
        let a7 = global_data[global_data.indexOf("A7")+1];
        output = parseInt(a15) / parseInt(a7);
        cell2.innerText = output;

        //third row of table 2
        let row4 = table2.insertRow();
        cell1 = row4.insertCell();
        cell1.innerText = "Charlie"
        cell2 = row4.insertCell();
        // get A13 * A12
        let a13 = global_data[global_data.indexOf("A13")+1];
        let a12 = global_data[global_data.indexOf("A12")+1];
        output = parseInt(a13) * parseInt(a12);
        cell2.innerText = output;
    })
    .catch(error => console.log(error));

