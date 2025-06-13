// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
const sheetId = "1E55ikahFjBCWT2CDFH9qX3sSOflFz8ziids97UKMGjI";
// sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
const sheetName = encodeURIComponent("Sheet1");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

$.ajax({
  type: "GET",
  url: sheetURL,
  dataType: "text",
  success: function (response) {
    // var data = $.csv.toArrays(response);
    var data = $.csv.toObjects(response);
    console.log(data);
    var table=makeTableHTML(data)
    document.getElementById("myfield").innerHTML = "hello";    // 'data' is an Array of Objects
    // ADD YOUR CODE HERE
  },
});
function makeTableHTML(myArray) {
    var result = "<table border=1><tr><td><h4> Category</h4><td><h4>Score</h4></td><tr>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
            result += "<td><h4>"+myArray[i][0]+"</h4></td><td><h4>"+myArray[i][1]+"</h4></td>";
        result += "</tr>";
    }
    result += "</table>";
    return result;
}
