// script.js

function submitQuery() {
    var query = document.getElementById("query").value;
    var responseDiv = document.getElementById("response");

    // if (query == "ride"){
    //     responseDiv.textContent = "fine ra tambi";
    // }
    // else{responseDiv.textContent = "You entered: " + query;}
}
import data from './temper.json';

if(query==data.id){
    responseDiv.textContent = "fine ra tambi";
}

