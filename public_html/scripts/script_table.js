// fetch('dados_ex1.json')
// .then(res => res.json)
// .then(data =>  console.log(data));
// colocar um if para escolher de onde vali ler
let Ltitle = document.getElementById("Ltitle")
var uu = "https://raw.githubusercontent.com/ululudb/ululu.com/main/public_html/data/table.json";Ltitle.innerHTML += `<h3> LENDO via github </h3>`// lendo via github
// var uu = "data/table.json"; Ltitle.innerHTML += `<h3> LENDO via servidor local </h3>`// lendo via servidor local
fetch(uu).then((response) => {
    response.json().then((dt) => {
        console.log(dt)
        let tabela = dt;
        // console.log(db[2])

        // console.log(tabela, 'the json obj');
        // Get the containerFetch element where the table will be inserted
        let containerFetch = document.getElementById("containerFetch");
        containerFetch.innerHTML += `<h3> LENDO E CONFIGURANDO USANDO O FETCH </h3>`

        // Create the table element
        let table = document.createElement("table");

        // Get the keys (column names) of the first object in the JSON data
        let cols = Object.keys(tabela[0]);

        // Create the header element
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");

        // Loop through the column names and create header cells
        cols.forEach((item) => {
            let th = document.createElement("th");
            th.innerText = item; // Set the column name as the text of the header cell
            tr.appendChild(th); // Append the header cell to the header row
        });
        thead.appendChild(tr); // Append the header row to the header
        table.append(tr) // Append the header to the table

        // Loop through the JSON data and create table rows
        tabela.forEach((item) => {
            let tr = document.createElement("tr");

            // Get the values of the current object in the JSON data
            let vals = Object.values(item);

            // Loop through the values and create table cells
            vals.forEach((elem) => {
                let td = document.createElement("td");
                td.innerText = elem; // Set the value as the text of the table cell
                tr.appendChild(td); // Append the table cell to the table row
            });
            table.appendChild(tr); // Append the table row to the table
        });
        containerFetch.appendChild(table); // Append the table to the containerFetch element


    })
})


var request = new XMLHttpRequest();
request.open("GET", uu);
request.responseType = "json";
request.send();
// console.log(request)
request.onload = function () {
    let jsonData = request.response;
    console.log(jsonData)

    // console.log(jsonData, 'the json obj');
    // Get the container element where the table will be inserted
    let container = document.getElementById("container");
    container.innerHTML += `<h3> LENDO E CONFIGURANDO USANDO O XMLHttpRequest </h3>`

    // Create the table element
    let table = document.createElement("table");

    // Get the keys (column names) of the first object in the JSON data
    let cols = Object.keys(jsonData[0]);

    // Create the header element
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    // Loop through the column names and create header cells
    cols.forEach((item) => {
        let th = document.createElement("th");
        th.innerText = item; // Set the column name as the text of the header cell
        tr.appendChild(th); // Append the header cell to the header row
    });
    thead.appendChild(tr); // Append the header row to the header
    table.append(tr) // Append the header to the table

    // Loop through the JSON data and create table rows
    jsonData.forEach((item) => {
        let tr = document.createElement("tr");

        // Get the values of the current object in the JSON data
        let vals = Object.values(item);

        // Loop through the values and create table cells
        vals.forEach((elem) => {
            let td = document.createElement("td");
            td.innerText = elem; // Set the value as the text of the table cell
            tr.appendChild(td); // Append the table cell to the table row
        });
        table.appendChild(tr); // Append the table row to the table
    });
    container.appendChild(table); // Append the table to the container element
};



console.log(dadoslocais)

// console.log(dadoslocais, 'the json obj');
// Get the contLoc element where the table will be inserted
let contLoc = document.getElementById("contLoc");

contLoc.innerHTML += `<h3> LENDO via dados locais apartir de um script .js </h3>`

// Create the table element
let table = document.createElement("table");

// Get the keys (column names) of the first object in the JSON data
let cols = Object.keys(dadoslocais[0]);

// Create the header element
let thead = document.createElement("thead");
let tr = document.createElement("tr");

// Loop through the column names and create header cells
cols.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item; // Set the column name as the text of the header cell
    tr.appendChild(th); // Append the header cell to the header row
});
thead.appendChild(tr); // Append the header row to the header
table.append(tr) // Append the header to the table

// Loop through the JSON data and create table rows
dadoslocais.forEach((item) => {
    let tr = document.createElement("tr");

    // Get the values of the current object in the JSON data
    let vals = Object.values(item);

    // Loop through the values and create table cells
    vals.forEach((elem) => {
        let td = document.createElement("td");
        td.innerText = elem; // Set the value as the text of the table cell
        tr.appendChild(td); // Append the table cell to the table row
    });
    table.appendChild(tr); // Append the table row to the table
});
contLoc.appendChild(table); // Append the table to the cont_loc element  
