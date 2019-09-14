// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

var tbody = d3.select("tbody");

console.log(data);

 data.forEach(function(sightingReport) {
  console.log(sightingReport);
  var row = tbody.append("tr");
   Object.entries(sightingReport).forEach(function([key, value]) {
     console.log(key, value);
     var cell = tbody.append("td");
     cell.text(value);
   });
 });

var button = d3.select('#filter-btn');

button.on('click', function () {
    // d3.event.preventDefault()
    var inputField = d3.select('#datetime');
    var inputValue = inputField.property('value');
    console.log(inputValue)

    var filteredData = tableData.filter(item => item.datetime === inputValue);

    console.log(filteredData);

    var outcome = d3.select('#filters');
    tbody.html("")
    filteredData.forEach((entry) => {
        console.log(entry);
        var row = tbody.append('tr');

    Object.entries(entry).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
