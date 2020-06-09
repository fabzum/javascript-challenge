// from data.js
var tableData = data;


var tbody = d3.select("tbody");

data.forEach((ufoSighting) => { 
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        row.append("td").text(value);
    });
});



var button = d3.select("#filter-btn");
var form = d3.select("#filter");
var reset = d3.select("#reset-btn");
var ufoImage = d3.select("#ufo-button");

button.on("click", runEnter);
form.on("submit", runEnter);
reset.on("click", tableReset)
ufoImage.on("click", UFO)



function runEnter() {

    d3.event.preventDefault();
    
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    
    
    filteredData.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key, value]) => {
            row.append("td").text(value);
            
        });
    });

};

function tableReset () {
    d3.event.preventDefault();
    
    tbody.html("");

    data.forEach((ufoSighting) => { 
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            row.append("td").text(value);
        });
    });
};

