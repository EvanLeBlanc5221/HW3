function usrTable(){

//Getting user information on the min and max of row and column and putting them into variables
var minCol = document.getElementById("minC").value;
var maxCol = document.getElementById("maxC").value;
var minRow = document.getElementById("minR").value;
var maxRow = document.getElementById("maxR").value;
var pass = document.getElementById("error");

//Check if user input is correct, if not throw error
if (minCol > 50 || minCol < -50 || maxCol > 50 || maxCol < -50 || minRow > 50 || minRow < -50 || maxRow > 50 || maxRow < -50){
    error();
}
else if (minCol > maxCol || minRow > maxCol) {
    errorTwo();
}else{
    pass.innerHTML = "<span>"+"</span>"
}

//Creating the first row for the dynamic table
var table = '';
var i = +minRow;
var j = +minCol;
var temp = +minCol;

table += '<table>';

table += '<tr>';
table+='<td>'+"X"+'</td>';

for(temp; temp <= +maxCol; temp++){
 table += '<td>'+temp+'</td>';
}
table += '</tr>';

//Dynamically creating the table by multiplying the row and column, storing the results in their own <td>

for(i; i <= +maxRow; i++){

table += '<tr>';
table += '<td>'+i+'</td>';
j = +minCol;
    for(j; j <= +maxCol; j++){

        table += '<td>'+(i*j)+'</td>';

    }

 table += '</tr>';

}

table+='</table>';
console.log(table);
document.getElementById("myTable").innerHTML = table;

}

//Error functions
function error(){

var msg = document.getElementById("error");
msg.innerHTML = "<span style = 'color: darkred;'>" + "Please enter a set of numbers ranging from -50 to 50</span>"
table += '';

}

function errorTwo(){

var minGmax = document.getElementById("error");
minGmax.innerHTML = "<span style = 'color: darkred;'>" + "The minimum cant be greater than the maximum</span>"
table += '';

}
