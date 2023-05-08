"use strict"
import bslData from "./sample.json" assert {type:'json'}

document.addEventListener( "DOMContentLoaded", append_json, false );
console.log(bslData)

//first add an event listener for page load
 // get_json_data is the function name that will fire on page load

//this function appends the json data to the table 'gable'
function append_json1(bslData){
    var table = document.getElementById('tbl-Data');
    table.forEach(function(object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.SIGN + '</td>' +
        '<td>' + object.DESCRIPTION + '</td>' +
        '<td>' + object.VIDEO + '</td>' +
        '<td>' + object.DATE + '</td>';
        table.appendChild(tr);
    });
}
 //this function appends the json data to the table 'gable'
 function append_json(bslData)
 {
    var table = document.getElementById('tbl-Data');
   

    bslData.forEach(function(object) 
    {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.COUNTRY + '</td>' +
        '<td>' + object.LoC + '</td>' +
        '<td>' + object.BALANCE + '</td>' +
        '<td>' + object.DATE + '</td>';
        table.appendChild(tr);
    });
}